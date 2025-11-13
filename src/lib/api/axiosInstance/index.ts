// lib/api/axiosInstance.ts
import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers:{ "Content-Type": "application/json",}
  // withCredentials: true,
});

// 🔹 Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("authToken");
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 🔹 Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid — clear it
      Cookies.remove("authToken");
      console.error("Unauthorized! Token removed.");
      // Optionally redirect to login page if using client components
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
