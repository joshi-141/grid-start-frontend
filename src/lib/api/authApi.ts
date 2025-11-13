
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

export const authApi = {
    register: (formData: RegisterData) =>
        axiosInstance.post("api/auth/registration/", formData),

    login: (formData: LoginData) => axiosInstance.post("api/auth/login/", formData),

    logout: (data: string) => axiosInstance.post("api/auth/logout/", data),

}