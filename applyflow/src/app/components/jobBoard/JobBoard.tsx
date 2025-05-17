// components/JobBoard.tsx
import { useJobStore } from "@/app/appStore";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { useEffect, useRef, useState } from "react";
import { TfiMoreAlt } from "react-icons/tfi";
import MoreOption from "./MoreOption";

const statuses = [
  "Applied",
  "Under Review",
  "Interview Scheduled",
  "Selected",
] as const;

export default function JobBoard() {
  const [isMoreOption, setIsMoreOption] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const jobs = useJobStore((s) => s.jobs);
  const updateJobStatus = useJobStore((s) => s.updateJobStatus);

  const showMoreOptions = () => {
    setIsMoreOption(true);
  };

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

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMoreOption(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 min-h-[700px]">
          {statuses.map((status) => (
            <Droppable droppableId={status} key={status}>
              {(provided) => (
                <div
                  className="bg-[#1f2937] rounded-xl p-3 shadow-sm min-h-[200px]"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <h2 className="font-semibold text-sm text-[#f44336] mb-3">
                    {status}
                  </h2>
                  {groupedJobs[status].map((job, index) => (
                    <Draggable key={job.id} draggableId={job.id} index={index}>
                      {(provided) => (
                        <div
                          className="bg-[#374151] p-3 mb-2 rounded-lg border border-[#f44336] shadow-sm"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="flex justify-between text-sm font-medium text-[#f44336]">
                            {job.jobName}
                            <span
                              ref={menuRef}
                              onClick={showMoreOptions}
                              className="relative cursor-pointer"
                            >
                              <TfiMoreAlt
                                className="text-[#f44336]"
                                width={16}
                                height={16}
                              />
                            </span>
                          </div>
                          <div className="text-xs text-[#f44336]">
                            {job.companyName}
                          </div>
                          <div className="text-xs text-[#f44336] italic">
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

      {isMoreOption && <MoreOption />}
    </>
  );
}
