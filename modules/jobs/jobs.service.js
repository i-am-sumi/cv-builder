import { api } from "@/utils/restClient";

export const getJobs = async () => {
  const res = await api.rest["jobs/my-jobs"].get({
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  return res.data.data;
};

export const getJob = async () => {
  const res = await api.rest.jobs.get();
  return res.data;
};

export const createJob = async () => {
  const res = await api.rest.jobs.post({
    body: {},
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const updateJob = async (job) => {
  const res = await api.rest.jobs.patch({
    body: {},
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const deleteJob = async (id) => {
  const res = await api.rest.jobs(id).delete({
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};
