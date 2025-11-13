import axiosInstance from "./axiosInstance";
import Cookies from "js-cookie";

export const userApi = {
  getUser: async () => {
    const sessionId = Cookies.get("sessionid"); 

    return axiosInstance.get("api/auth/user/", {
      headers: {
        Accept: "application/json",
        Cookie: `sessionid=${sessionId}`, 
      },
      withCredentials: true, 
    });
  },

  updateProfile: (data: any) => axiosInstance.put("api/user/profile/", data),
};
