import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteJourney, getAllJourney } from "../services/Journey";

export const useGetAllJourney = () => {
  return useQuery<any, Error, any, string[]>({
    queryKey: ["GET_ALL_JOURNEY"],
    queryFn: async () => await getAllJourney(),
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
