import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createEducation,
  deleteEducation,
  getEducation,
  getEducations,
  updateEducation,
} from "./education.service";

export const useEducations = () => {
  return useQuery({
    queryKey: ["education"],
    queryFn: getEducations,
    enabled: true,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

export const useEducation = (id) => {
  return useQuery({
    queryKey: ["education", id],
    queryFn: getEducation,
    enabled: true,
  });
};

export const useAddEducation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createEducation,
    onSuccess: () => {
      queryClient.invalidateQueries(["education"]);
    },
  });
};

export const useUpdateEducation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateEducation,
    onSuccess: (updateEducation) => {
      const id = updateEducation?.id;
      if (id) {
        queryClient.setQueryData(["education", id], updateEducation);
        queryClient.invalidateQueries(["education"]);
      }
    },
  });
};

export const useDeleteEducation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteEducation,
    onSuccess: () => {
      queryClient.invalidateQueries(["education"]);
    },
  });
};
