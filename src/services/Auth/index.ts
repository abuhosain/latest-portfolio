import axiosInstance from "@/src/lib/AxiousInstance";
import { cookies } from "next/headers";

export const loginUser = async (userData) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);
    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    const data = {
      success: false,
      message: error?.response?.data?.message,
    };
    return data;
  }
};

export const logOut = async () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};

export const getNewAccessToken = async () => {
  try {
    const refreshToken = (await cookies()).get("refreshToken")?.value;
    const res = await axiosInstance({
      url: "/auth/refresh-token",
      method: "POST",
      withCredentials: true,
      headers: {
        cookie: `refreshToken=${refreshToken}`,
      },
    });

    return res.data;
  } catch (error) {
    throw new Error("Failed to get new access token");
  }
};
