import { api } from "@/utils/restClient";

export const getEducations = async () => {
  const res = await api.rest.education.get({
    query: { page: 1, limit: 20 },
  });
  return res.data.education;
};
export const getEducation = async ({ queryKey }) => {
  const [_key, id] = queryKey;
  console.log("id", id);
  const res = await api.rest.education(id).get();

  return res.data.data;
};
export const createEducation = async (education) => {
  const res = await api.rest.education.post({
    body: {
      institution: `${education.institution}`,
      degree: `${education.degree}`,
      fieldOfStudy: `${education.fieldOfStudy}`,
      degreeType: `${education.degreeType}`,
      startDate: `${education.startDate}`,
      endDate: `${education.endDate}`,
      location: `${education.location}`,
      description: `${education.description}`,
      achievements: education.achievements?.map((a) => String(a)) || [],
      gpa: Number(education.gpa),
    },
  });
  console.log("addeducation", res);
  return res.data;
};
export const updateEducation = async (education) => {
  const res = await api.rest.education(education.id).patch({
    body: {
      institution: `${education.institution}`,
      degree: `${education.degree}`,
      fieldOfStudy: `${education.fieldOfStudy}`,
      degreeType: `${education.degreeType}`,
      startDate: `${education.startDate}`,
      endDate: `${education.endDate}`,
      location: `${education.location}`,
      description: `${education.description}`,
      achievements: education.achievements?.map((a) => String(a)) || [],
      gpa: Number(education.gpa),
    },
  });
  console.log("updateEducation", res);
  return res.data;
};
export const deleteEducation = async (id) => {
  const res = await api.rest.education(id).delete({});
  console.log("deleteEducation", res);
  return res;
};
