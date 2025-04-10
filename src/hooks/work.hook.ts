import { useMutation, useQuery } from "@tanstack/react-query";
import { createWork, deleteWork, getAllJWork } from "../services/Work";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";

export const useGetAllWork = () => {
    return useQuery<any, Error, any, string[]>({
      queryKey: ["GET_ALL_WORK"],
      queryFn: async () => await getAllJWork(),
    });
  };

  export const useCreateWork = () => {
    return useMutation<any, Error, FieldValues>({
      mutationKey: ["CREATE_PROJECT"],
      mutationFn: async (data) => await createWork(data),
    });
  };

  export const useDeleteWork = () => {
    return useMutation<any, Error, string>({
      mutationKey: ["DELETE_PROJECT"],
      mutationFn: async (journeyId) => await deleteWork(journeyId),
      onSuccess: () => {
        toast.success("Project deleted successfully");
      },
      onError: (error) => {
        toast.error(error?.message);
      },
    });
  };
  