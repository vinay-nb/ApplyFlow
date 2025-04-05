"use client";
import { useState } from "react";
import AddJobDetails from "./components/addJobDetails/AddJobDetails";
import { useJobStore } from "./appStore";

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
    <div className="p-6">
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Add Job
      </button>

      <AddJobDetails
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddJob}
      />
    </div>
  );
}
