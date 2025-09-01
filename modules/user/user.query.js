"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createUser,
  deleteUser,
  getUser,
  getUserProfile,
  getUsers,
  updateUser,
} from "./user.service";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    enabled: true,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const useUserProfile = () => {
  return useQuery({
    queryKey: ["user-profile"],
    queryFn: getUserProfile,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const useUser = (id) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: getUser,
    enabled: !!id,
  });
};

export const useCreateUser = () => {
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => alert("user added Successful"),
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      alert("User updated successfully");
      queryClient.invalidateQueries(["users"]);
      queryClient.invalidateQueries(["user"]);
      queryClient.invalidateQueries(["user-profile"]);
    },
  });
};

export const useDeleteUser = () => {
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => alert("delete user"),
  });
};
