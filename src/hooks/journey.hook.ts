import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  createEducation,
  createExperience,
  createSkill,
  deleteJourney,
  getAllJourney,
  getSingleJourneyById,
  updateJourney,
} from "../services/Journey";
import { FieldValues } from "react-hook-form";

export const useGetAllJourney = () => {
  return useQuery<any, Error, any, string[]>({
    queryKey: ["GET_ALL_JOURNEY"],
    queryFn: async () => await getAllJourney(),
  });
};

export const useCreateExperience = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["CREATE_EXPERIENCE"],
    mutationFn: async (userData) => await createExperience(userData),
  });
};
export const useCreateEducation = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["CREATE_EDUCATION"],
    mutationFn: async (userData) => await createEducation(userData),
  });
};
export const useCreateSkill = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["CREATE_SKILL"],
    mutationFn: async (userData) => await createSkill(userData),
  });
};

export const useGetSingleJourney = (categoryId: string) => {
  return useQuery<any, Error, any, string[]>({
    queryKey: ["GET_SINGLE_JOURNEY"],
    queryFn: async () => await getSingleJourneyById(categoryId),
  });
};

export const useUpdateJourney = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["UPDATE_JOURNEY"],
    mutationFn: async ({ categoryId, categoryData }) =>
      await updateJourney(categoryId, categoryData),
  });
};

export const useDeleteJourney = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_JOURNEY"],
    mutationFn: async (journeyId) => await deleteJourney(journeyId),
    onSuccess: () => {
      toast.success(" Deleted successfully");
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });
};
