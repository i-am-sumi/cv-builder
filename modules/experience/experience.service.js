import { api } from "@/utils/restClient";

export const getExperiences = async () => {
  const res = await api.rest.experiences.get({
    query: { page: 1, limit: 20 },
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  return res.data.experiences;
};

export const getExperience = async ({ queryKey }) => {
  const [, id] = queryKey;
  const res = await api.rest.experiences(id).get();
  return res.data;
};

export const createExperience = async (experience) => {
  const res = await api.rest.experiences.post({
    body: {
      jobTitle: `${experience.jobTitle}`,
      company: `${experience.company}`,
      location: `${experience.location}`,
      startDate: `${experience.startDate}`,
      endDate: `${experience.endDate}`,
      description: `${experience.description}`,
      achievements: experience.achievements?.map((a) => String(a)) || [],
      technologies: Array.isArray(experience.technologies)
        ? experience.technologies
        : experience.technologies.split(",").map((t) => t.trim()),
    },
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  return res.data;
};

export const updateExperience = async (experience) => {
  const res = await api.rest.experiences(experience.id).patch({
    body: {
      jobTitle: `${experience.jobTitle}`,
      company: `${experience.company}`,
      location: `${experience.location}`,
      startDate: `${experience.startDate}`,
      endDate: `${experience.endDate}`,
      description: `${experience.description}`,
      achievements: experience.achievements?.map((a) => String(a)) || [],
      technologies: Array.isArray(experience.technologies)
        ? experience.technologies
        : experience.technologies.split(",").map((t) => t.trim()),
    },
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });

  console.log("Update response:", res);
  return res.data;
};

export const deleteExperience = async (id) => {
  const res = await api.rest.experiences(id).delete({
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  console.log("delete", res);
  return res.data;
};
