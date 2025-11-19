// lib/api/axiosInstance.ts
import axios from "axios";
import Cookies from "js-cookie";

import { store } from "@/lib/store";
import { showLoader, hideLoader } from "@/lib/features/slices/loaderSlice";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
});

// 🔹 Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    store.dispatch(showLoader()); // 👈 START LOADER

    // Attach token
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Token ${token}`;
      }
    }

    return config;
  },
  (error) => {
    store.dispatch(hideLoader());
    return Promise.reject(error);
  }
);

// 🔹 Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    store.dispatch(hideLoader()); 
    return response;
  },
  (error) => {
    store.dispatch(hideLoader()); 

    if (error.response?.status === 401) {
      Cookies.remove("authToken");

      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
