// src/store/useJobStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

export type Job = {
  id: string;
  jobName: string;
  companyName: string;
  appliedVia: string;
  appliedDate: string;
  status: string;
};

type JobStore = {
  jobs: Job[];
  addJob: (job: Omit<Job, "id">) => void;
  updateJobStatus: (id: string, status: Job["status"]) => void;
  deleteJob: (id: string) => void;
};

export const useJobStore = create<JobStore>()(
  persist(
    (set) => ({
      jobs: [],

      addJob: (jobInput) =>
        set((state) => ({
          jobs: [
            ...state.jobs,
            {
              id: uuidv4(),
              dateAdded: new Date().toISOString(),
              ...jobInput,
            },
          ],
        })),

      updateJobStatus: (id, status) =>
        set((state) => ({
          jobs: state.jobs.map((job) =>
            job.id === id ? { ...job, status } : job
          ),
        })),

      deleteJob: (id) =>
        set((state) => ({
          jobs: state.jobs.filter((job) => job.id !== id),
        })),
    }),
    {
      name: "job-applications", // Key for localStorage
    }
  )
);
