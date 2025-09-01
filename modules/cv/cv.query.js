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

/*export const useUpdateCV = () => {
  return useMutation({
    mutationFn: updateCV,
    onSuccess: () => alert("update cv"),
  });
};

export const useDeleteCV = () => {
  return useMutation({
    mutationFn: deleteCV,
  });
};*/
