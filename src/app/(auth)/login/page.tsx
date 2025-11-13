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

interface fieldType {
  username: string;
  email: string;
  password: string;
}

const initialFormData = {
  username: "",
  email: "",
  password: "",
};

export default function LoginPage() {
  const [formData, setFormData] = useState<fieldType>(initialFormData);
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

    try {
      const response = await authApi.login(formData);
      toast.success("Login successful!");
      dispatch(setToken(response.data.key));
      router.push("/");
      setFormData(initialFormData);

    } catch (err: any) {
      console.error("❌ Error:", err);
      setError(err.message || "Login failed");
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
        <h2 className="candidates-details-left mb-8 py-4 text-center" style={{ borderRadius: "0" }}>
          Login
        </h2>

        <div className="flex flex-col gap-3 p-4">
          <Input
            label="User Name"
            name="username"
            value={formData.username}
            onChange={handleChange}
            type="text"
            required
          />
          <Input
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            required
          />

          <Input
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            required
          />

          {error && <p className="text-sm text-red-600 text-center">{error}</p>}

          <Button
            type="submit"
            disabled={loading}
            className={`${styles["aply-btn"]} mt-2 w-full tracking-wide`}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>

          <p className="text-sm text-center">
            <Link
              href="/forgotpassword"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Forgot password?
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
