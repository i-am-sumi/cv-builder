import { api } from "@/utils/restClient";

export const getSkills = async () => {
  const res = await api.rest.skills.get({
    query: { page: 1, limit: 20 },
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  return res.data;
};

export const getSkill = async ({ queryKey }) => {
  const [_key, id] = queryKey;
  const res = await api.rest.skills(id).get();
  return res.data;
};

export const createSkill = async (skill) => {
  const res = await api.rest.skills.post({
    body: {
      name: skill.name,
      level: skill.level,
      category: skill.category,
      yearsOfExperience: Number(skill.yearsOfExperience),
    },
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });

  return res.data;
};

export const updateSkill = async (skill) => {
  const res = await api.rest.skills(skill.id).patch({
    body: {
      name: `${skill.name}`,
      level: `${skill.level}`,
      category: `${skill.category}`,
      yearsOfExperience: Number(skill.yearsOfExperience),
    },
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  return res.data;
};

export const deleteSkill = async (id) => {
  const res = await api.rest.skills(id).delete({
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  return res.data;
};
