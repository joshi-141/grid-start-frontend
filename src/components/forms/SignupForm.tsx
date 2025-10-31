"use client";

import { useForm } from "react-hook-form";
import Form from "./Form";
import { Input, Button, Checkbox } from "@/components/ui";

interface SignUpInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

export default function SignForm() {
  const methods = useForm<SignUpInputs>({
    mode: "onTouched",
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = methods;

  const password = watch("password");

  const onSubmit = (data: SignUpInputs) => {
    console.log("Form submitted:", data);
  };

  return (
    <Form
      methods={methods}
      onSubmit={onSubmit}
      className="bg-white px-6 py-8 rounded-lg"
    >
      <h3 className="w-full mb-8 text-2xl font-semibold uppercase">
        Sign Up an Account
      </h3>

      <div className="flex flex-col gap-3 w-auto">
        <div className="flex gap-4">
          <Input
            label="First Name"
            {...register("firstName", { required: "First name is required" })}
            error={errors.firstName?.message}
          />
          <Input
            label="Last Name"
            {...register("lastName", { required: "Last name is required" })}
            error={errors.lastName?.message}
          />
        </div>

        <Input
          label="Email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
          error={errors.email?.message}
        />

        <Input
          label="Password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 8, message: "Password must be at least 8 characters" },
          })}
          error={errors.password?.message}
        />

        <Input
          label="Confirm Password"
          type="password"
          {...register("confirmPassword", {
            required: "Confirm your password",
            validate: (value) =>
              value === password || "Passwords do not match",
          })}
          error={errors.confirmPassword?.message}
        />

        <Checkbox
          label="Accept the Terms and Privacy Policy"
          {...register("terms", { required: "You must accept the terms" })}
          error={errors.terms?.message}
        />

        <Button type="submit" disabled={isSubmitting} className="cursor-pointer h-10">
          {isSubmitting ? "Submitting..." : "Sign Up"}
        </Button>
      </div>
    </Form>
  );
}
