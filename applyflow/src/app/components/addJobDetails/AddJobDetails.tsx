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
  const [appliedDate, setAppliedDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const handleSubmit = () => {
    onSubmit({ jobName, companyName, appliedVia, status, appliedDate });
    onClose();
    setJobName("");
    setCompanyName("");
    setAppliedVia("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-xs">
      <div className="bg-[#1f2937] w-[90%] max-w-md rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-[#f44336]">
          Add Job Application
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#f44336]">
              Job Name
            </label>
            <input
              type="text"
              value={jobName}
              onChange={(e) => setJobName(e.target.value)}
              className="mt-1 w-full rounded-md border border-[#f44336] p-2 focus:ring-2  text-[#f44336]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#f44336]">
              Company Name
            </label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="mt-1 w-full rounded-md border border-[#f44336] p-2 focus:ring-2  text-[#f44336]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#f44336]">
              Applied Via
            </label>
            <input
              type="text"
              value={appliedVia}
              onChange={(e) => setAppliedVia(e.target.value)}
              className="mt-1 w-full rounded-md border border-[#f44336] p-2 focus:ring-2  text-[#f44336]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#f44336]">
              Status
            </label>
            <input
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="mt-1 w-full rounded-md border border-[#f44336] p-2 focus:ring-2  text-[#f44336]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#f44336]">
              Applied Date
            </label>
            <input
              type="date"
              value={appliedDate}
              onChange={(e) => setAppliedDate(e.target.value)}
              className="mt-1 w-full rounded-md border border-[#f44336] p-2 focus:ring-2  text-[#f44336]"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm cursor-pointer rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm text-white bg-[#f44336] rounded-md hover:bg-[#f44336] cursor-pointer"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
