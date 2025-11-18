"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axiosInstance from "@/lib/api/axiosInstance";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const uid = searchParams.get("uid") || "";
  const token = searchParams.get("token") || "";

  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await axiosInstance.post("/api/auth/password/reset/confirm/", {
        uid,
        token,
        new_password1: pass1,
        new_password2: pass2,
      });

      setMessage("Password reset successful! Redirecting...");
      setTimeout(() => router.push("/change-password"), 1500);
    } catch (err: any) {
      const data = err.response?.data;
      setError(
        data?.new_password2?.[0] ||
        data?.token ||
        "Failed to reset password"
      );
    }
  };

  return (
    <div className="max-w-md mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Reset Password</h1>

      {message && <p className="text-green-600">{message}</p>}
      {error && <p className="text-red-600">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <input
          type="password"
          placeholder="New password"
          className="w-full border p-2 rounded"
          value={pass1}
          onChange={(e) => setPass1(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm new password"
          className="w-full border p-2 rounded"
          value={pass2}
          onChange={(e) => setPass2(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}
