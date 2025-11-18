
import axiosInstance from "./axiosInstance";

interface RegisterData {
    username: string;
    email: string;
    password1: string;
    password2: string;
}

interface LoginData {
    email: string;
    password: string;
}

interface changePassword {
      new_password1: string;
    new_password2: string;
}

export const authApi = {
    register: (formData: RegisterData) => axiosInstance.post("api/auth/registration/", formData),
    login: (formData: LoginData) => axiosInstance.post("api/auth/login/", formData),
    resetPassword: (formData: any) => axiosInstance.post("/api/auth/password/reset/", formData),
    confirmReset: (formData: any) => axiosInstance.post("/api/auth/password/reset/confirm/", formData),
    changePassword: (formData: changePassword) => axiosInstance.post("/api/auth/password/change/", formData),
    logout: (formData: string) => axiosInstance.post("api/auth/logout/", formData),

}