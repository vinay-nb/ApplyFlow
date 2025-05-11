"use client";
import { useState } from "react";
import AddJobDetails from "./components/addJobDetails/AddJobDetails";
import { useJobStore } from "./appStore";
import JobBoard from "./components/jobBoard/JobBoard";
import NavBar from "./components/navBar/NavBar";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addJob = useJobStore((state) => state.addJob);

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

  return (
    <div className="w-[100%] flex flex-col gap-2">
      <NavBar />
      <div className="flex flex-col gap-4 p-6">
        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Add Job
          </button>
        </div>

        <AddJobDetails
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddJob}
        />
        <JobBoard />
      </div>
    </div>
  );
}
