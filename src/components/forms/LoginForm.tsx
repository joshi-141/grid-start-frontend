"use client";

import { useForm } from "react-hook-form";
import Form from "./Form";
import { Input, Button } from "@/components/ui";
import Link from "next/link";

interface LoginInputs {
  email: string;
  password: string;
}

export default function LoginForm() {
  // ✅ Full methods for FormProvider context
  const methods = useForm<LoginInputs>({
    mode: "onTouched",
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = (data: LoginInputs) => {
    console.log("Form submitted:", data);
  };

  return (
    <Form
      methods={methods}
      onSubmit={onSubmit}
      className="bg-white px-6 py-8 rounded-lg"
    >
      <h3 className="w-full mb-8 text-2xl font-semibold uppercase">
        Login your account
      </h3>

      <div className="flex flex-col gap-5 w-80">
        {/* Email Field */}
        <Input
          label="Email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
          error={errors.email?.message}
        />

        {/* Password Field */}
        <Input
          label="Password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          error={errors.password?.message}
        />

        <p className="text-sm">
          Forgot your password?{" "}
          <Link
            href="#"
            className="font-medium text-blue-600 hover:text-blue-700"
          >
            Reset password
          </Link>
        </p>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="cursor-pointer h-10"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </div>
    </Form>
  );
}
