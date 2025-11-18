"use client";

import { useState } from "react";
import { Input, Button } from "@/components/ui";
import styles from "./login.module.css";
import Link from "next/link";
import { authApi } from "@/lib/api/authApi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation"; // ✅ correct for client-side cookies
import { useAppDispatch } from "@/lib/store";
import { setToken } from "@/lib/features/slices/authSlice";
import Image from "next/image";

interface FieldType {
  login: string;      // username or email
  password: string;
}

const initialFormData: FieldType = {
  login: "",
  password: "",
};

export default function LoginPage() {
  const [formData, setFormData] = useState<FieldType>(initialFormData);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const isEmail = formData.login.includes("@");

    const payload = {
      username: isEmail ? "" : formData.login,
      email: isEmail ? formData.login : "",
      password: formData.password,
    };

    try {
      const response = await authApi.login(payload);
      const token = response.data.key;
      dispatch(setToken(token));

      toast.success("Login successful!");

      router.push("/");
      setFormData(initialFormData);

    } catch (err: any) {
      const backendError = err.response?.data;

      if (backendError?.non_field_errors) {
        setError(backendError.non_field_errors[0]);
      } else if (backendError?.email) {
        setError(backendError.email[0]);
      } else if (backendError?.username) {
        setError(backendError.username[0]);
      } else {
        setError(backendError || "Login failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-[100vh] bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow max-w-md w-full"
      >
        <h2
          className="candidates-details-left mb-8 py-4 text-center"
          style={{ borderRadius: "0" }}
        >
          Login
        </h2>

        <div className="flex flex-col gap-3 p-4 pb-2">
          {/* Username or Email */}
          <Input
            label="Email or Username"
            name="login"
            value={formData.login}
            onChange={handleChange}
            type="text"
            required
          />

          {/* Password */}
          <Input
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            required
          />

          {/* Error message */}
          {error && <p className="text-sm text-red-600">{error}</p>}

          {/* Submit button */}
          <Button
            type="submit"
            disabled={loading}
            className={`${styles["aply-btn"]} mt-2 w-full tracking-wide`}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>

          {/* <span className="text-center">
            <Link href="/forgot-password" className="font-medium mt-2">
              Forgot password?
            </Link>
          </span> */}

        </div>
        {/* ⭐ Google Register Button ADDED HERE */}
        <div className="w-full flex flex-wrap items-center justify-center px-4 ">
          <button
            type="button"
            onClick={() => console.log("Google Register Clicked")}
            className="w-full flex items-center justify-center gap-3 border rounded mt-2 p-2 bg-white hover:bg-gray-50 transition shadow-sm"
          >
            <Image
              src="/images/icon/google.png"
              alt="Google"
              width={20}
              height={20}
            />
            <span className="text-sm font-medium tracking-wide">
              Login with Google
            </span>
          </button>
          
           <span className="w-full text-center mt-2">Or</span>
          <Link href="/registration" className="p-4 pt-2 underline"> Click to register </Link>

        </div>

      </form>
    </div>
  );
}
