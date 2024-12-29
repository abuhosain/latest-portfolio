"use server";

import axiosInstance from "../../lib/AxiousInstance";

export const getAllJourney = async () => {
  let fetchOptions = {};
  fetchOptions = {
    cache: "no-store",
  };
  const { data } = await axiosInstance.get("/journey", fetchOptions);
  return data;
};

export const deleteJourney = async (id: string) => {
  const { data } = await axiosInstance.delete(`/journey/${id}`);
  return data;
};
