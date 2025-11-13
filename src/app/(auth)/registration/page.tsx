"use client";

import { useState } from "react";
import { Input, Button } from "@/components/ui";
import styles from "./register.module.css";
import { authApi } from "@/lib/api/authApi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


interface RegisterData {
  username: string;
  email: string;
  password1: string;
  password2: string;
}

const initialFormData = {
  username: "",
  email: "",
  password1: "",
  password2: "",
};

export default function Registration() {
  const [formData, setFormData] = useState<RegisterData>(initialFormData);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  // const [success, setSuccess] = useState(false);

  const router = useRouter();
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    // setSuccess(false);

    if (formData.password1 !== formData.password2) {
      setError("Passwords do not match");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      const response = await authApi.register(formData);
      console.log("response", response);
      toast.success("Registration successful!");
      router.push("/login");
      setFormData(initialFormData);
    } catch (err: any) {
      const errorData = err.response?.data;
      if (errorData && typeof errorData === "object") {
        Object.entries(errorData).forEach(([field, messages]) => {
          if (Array.isArray(messages)) {
            messages.forEach((msg) => toast.error(`${field}: ${msg}`));
          } else if (typeof messages === "string") {
            toast.error(`${field}: ${messages}`);
          }
        });
      } else {
        toast.error(err.message || "Something went wrong!");
      }

    } finally {
      setLoading(false);
    }

  };

  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow max-w-md w-full"
      >
        <h2 className="candidates-details-left mb-8 py-4 text-center" style={{ borderRadius: "0" }}>
          Register your account
        </h2>

        <div className="flex flex-col gap-3 p-4">
          <Input
            label="User Name"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Input
            label="Password"
            name="password1"
            type="password"
            value={formData.password1}
            onChange={handleChange}
            required
          />

          <Input
            label="Confirm Password"
            name="password2"
            type="password"
            value={formData.password2}
            onChange={handleChange}
            required
            error={error}
          />

          <Button
            type="submit"
            disabled={loading}
            className={`${styles["aply-btn"]} mt-2 w-full tracking-wide`}
          >
            {loading ? "Registering..." : "Register"}
          </Button>
        </div>
      </form>
    </div>
  );
}
