import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createSkill,
  deleteSkill,
  getSkill,
  getSkills,
  updateSkill,
} from "./skill.service";

export const useSkills = () => {
  return useQuery({
    queryKey: ["skills"],
    queryFn: getSkills,
    enabled: true,
  });
};

export const useSkill = (skillId) => {
  return useQuery({
    queryKey: ["skill", skillId],
    queryFn: getSkill,
  });
};

export const useAddSkill = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createSkill,
    onSuccess: () => {
      queryClient.invalidateQueries(["skill"]);
    },
  });
};

export const useUpdateSkill = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateSkill,
    onSuccess: (updatedSkill) => {
      const id = updatedSkill?.id;
      if (id) {
        queryClient.setQueryData(["skill", id], updatedSkill);
        queryClient.invalidateQueries(["skills"]);
      }
    },
  });
};

export const useDeleteSkill = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteSkill,
    onSuccess: () => {
      queryClient.invalidateQueries(["skills"]);
    },
  });
};
