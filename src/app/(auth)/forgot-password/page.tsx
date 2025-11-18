"use client";

import { useState } from "react";
import axiosInstance from "@/lib/api/axiosInstance";
import { toast } from "react-toastify";

interface FieldType {
  email: string;
}

const initialFormData: FieldType = {
  email: "",
};

export default function ForgotPasswordPage() {
  const [formData, setFormData] = useState<FieldType>(initialFormData);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const res = await axiosInstance.post("/api/auth/password/reset/", formData);

      setMessage("Password reset email sent! Please check your inbox.");
      toast.success("Reset email sent!");

      setFormData(initialFormData);

    } catch (err: any) {
      setError(
        err.response?.data?.email?.[0] ||
        "Something went wrong. Try again."
      );
    }
  };

  return (
    <div className="max-w-md mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>

      {message && <p className="text-green-600">{message}</p>}
      {error && <p className="text-red-600">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
}
