"use client";

import React from "react";
import { FormProvider, UseFormReturn, FieldValues } from "react-hook-form";

interface FormProps<T extends FieldValues> {
  methods: UseFormReturn<T>;
  onSubmit: (data: T) => void | Promise<void>;
  children: React.ReactNode;
  className?: string;
}

export default function Form<T extends FieldValues>({
  methods,
  onSubmit,
  children,
  className,
  ...props
}: FormProps<T>) {
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={className}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
}

