"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addCV, getCV, getCVs } from "./cv.service";

export const useCVs = () => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["cvs"],
    queryFn: getCVs,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cvs"] });
    },
  });
};

export const useCV = (id) => {
  return useQuery({
    queryKey: ["cvs", id],
    queryFn: getCV,
  });
};

export const useAddCV = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addCV,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cvs"] });
    },
  });
};

export const useResumeData = () => {
  const [resumeExperiences, setResumeExperiences] = useState([]);
  const [resumeEducation, setResumeEducation] = useState([]);
  const [resumeSkills, setResumeSkills] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("resumeData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setResumeExperiences(parsedData.experiences || []);
      setResumeEducation(parsedData.education || []);
      setResumeSkills(parsedData.skills || []);
    }
  }, []);

  return { resumeExperiences, resumeEducation, resumeSkills };
};
