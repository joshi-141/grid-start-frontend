"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/store";

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const router = useRouter();
  const token = useAppSelector((state) => state.auth.token);
  const isAuthenticated = Boolean(token);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600 text-lg">Checking authentication...</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthGuard;
