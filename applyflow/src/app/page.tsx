"use client";
import { useMemo, useState } from "react";
import AddJobDetails from "./components/addJobDetails/AddJobDetails";
import { useJobStore } from "./appStore";
import JobBoard from "./components/jobBoard/JobBoard";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const addJob = useJobStore((state) => state.addJob);
  const jobs = useJobStore((s) => s.jobs);

  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e?.target?.value);
  };

  const handleAddJob = (formData: {
    jobName: string;
    companyName: string;
    appliedVia: string;
    status: string;
    appliedDate: string;
  }) => {
    const { jobName, companyName, appliedVia, status, appliedDate } = formData;

    addJob({
      jobName,
      companyName,
      appliedVia,
      status,
      appliedDate,
    });
  };

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) =>
      job.companyName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, jobs]);

  return (
    <div className="p-6 w-[100%] flex flex-col gap-2">
      <div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Add Job
        </button>
      </div>

      <div>
        <input
          type="text"
          className="border-[1px] border-amber-50 rounded-md w-[400px] h-12 p-2"
          placeholder="search by company name"
          value={searchQuery}
          onChange={handleSearchQuery}
        />
      </div>

      <AddJobDetails
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddJob}
      />

      <JobBoard />
    </div>
  );
}
