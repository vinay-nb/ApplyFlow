import React, { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (form: {
    jobName: string;
    companyName: string;
    appliedVia: string;
    status: string;
    appliedDate: string;
  }) => void;
};

export default function AddJobDetails({ isOpen, onClose, onSubmit }: Props) {
  const [jobName, setJobName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [appliedVia, setAppliedVia] = useState("");
  const [status, setStatus] = useState("applied");
  const [appliedDate, setAppliedDate] = useState("");

  const handleSubmit = () => {
    onSubmit({ jobName, companyName, appliedVia, status, appliedDate });
    onClose();
    setJobName("");
    setCompanyName("");
    setAppliedVia("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white w-[90%] max-w-md rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-blue-500">
          Add Job Application
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job Name
            </label>
            <input
              type="text"
              value={jobName}
              onChange={(e) => setJobName(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Applied Via
            </label>
            <input
              type="text"
              value={appliedVia}
              onChange={(e) => setAppliedVia(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <input
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Applied Date
            </label>
            <input
              type="date"
              value={appliedDate}
              onChange={(e) => setAppliedDate(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
