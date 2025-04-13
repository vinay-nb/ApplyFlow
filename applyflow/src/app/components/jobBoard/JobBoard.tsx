// components/JobBoard.tsx
import { useJobStore } from "@/app/appStore";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

const statuses = [
  "Applied",
  "Under Review",
  "Interview Scheduled",
  "Selected",
] as const;

export default function JobBoard() {
  const jobs = useJobStore((s) => s.jobs);
  const updateJobStatus = useJobStore((s) => s.updateJobStatus);

  const groupedJobs = statuses.reduce((acc, status) => {
    acc[status] = jobs.filter(
      (job) => job?.status?.toLowerCase() === status?.toLowerCase()
    );
    return acc;
  }, {} as Record<(typeof statuses)[number], typeof jobs>);


  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination || destination.droppableId === source.droppableId) return;

    updateJobStatus(
      draggableId,
      destination.droppableId as (typeof statuses)[number]
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 min-h-[700px]">
        {statuses.map((status) => (
          <Droppable droppableId={status} key={status}>
            {(provided) => (
              <div
                className="bg-gray-50 rounded-xl p-3 shadow-sm min-h-[200px]"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2 className="font-semibold text-sm text-gray-700 mb-3">
                  {status}
                </h2>
                {groupedJobs[status].map((job, index) => (
                  <Draggable key={job.id} draggableId={job.id} index={index}>
                    {(provided) => (
                      <div
                        className="bg-white p-3 mb-2 rounded-lg border border-gray-200 shadow-sm"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="text-sm font-medium">{job.jobName}</div>
                        <div className="text-xs text-gray-500">
                          {job.companyName}
                        </div>
                        <div className="text-xs text-gray-400 italic">
                          {job.appliedVia}
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}
