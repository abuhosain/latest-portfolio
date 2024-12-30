"use server";

import axiosInstance from "../../lib/AxiousInstance";


export const getAllJWork = async () => {
    let fetchOptions = {};
    fetchOptions = {
      cache: "no-store",
    };
    const { data } = await axiosInstance.get("/work", fetchOptions);
    return data;
  };
  