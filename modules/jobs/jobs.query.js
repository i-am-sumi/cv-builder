import { useQuery } from "@tanstack/react-query";
import { createJob, deleteJob, getJobs, updateJob } from "./jobs.service";

export const useJobs = () => {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: getJobs,
    enabled: true,
  });
};

export const useAddJob = () => {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: createJob,
    enabled: true,
  });
};

export const useUpdateJob = () => {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: updateJob,
  });
};

export const useDeteleJob = () => {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: deleteJob,
  });
};
