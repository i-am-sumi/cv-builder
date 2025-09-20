"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createExperience,
  deleteExperience,
  getExperience,
  getExperiences,
  updateExperience,
} from "./experience.service";

export const useExperiences = () => {
  return useQuery({
    queryKey: ["experiences"],
    queryFn: getExperiences,
    enabled: true,
  });
};

export const useExperience = (id) => {
  return useQuery({
    queryKey: ["experiences", id],
    queryFn: getExperience,
    enabled: true,
  });
};

export const useAddExperience = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createExperience,
    onSuccess: () => {
      queryClient.invalidateQueries(["experiences"]);
    },
  });
};

export const useUpdateExperience = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateExperience,
    onSuccess: (updatedExperience) => {
      const id = updatedExperience?.id;
      if (id) {
        queryClient.setQueryData(["experiences", id], updatedExperience);
        queryClient.invalidateQueries(["experiences"]);
      }
    },
  });
};

export const useDeleteExperience = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteExperience,
    onSuccess: () => {
      queryClient.invalidateQueries(["experiences"]);
    },
  });
};
