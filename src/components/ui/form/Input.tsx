"use client";

import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: any;
  label?: string;
  error?: string | null;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {

    const [showPassword, setShowPassword] = useState(false);
    const isPassword = props.type === "password";

    // ✅ Correct toggle logic
    const inputType = isPassword
      ? (showPassword ? "text" : "password")
      : props.type;


    return (
      <div className={className ?? "flex flex-col gap-1"}>
        {label && <label htmlFor={props.id} className="text-sm font-medium">{label}</label>}

        {!isPassword ? (
          <input
            id={props.id}
            ref={ref}
            {...props}
            className={`border rounded-md px-3 py-2 focus:outline-none  ${error ? "border-red-500" : "border-gray-300"
              }`}
          />

        ) : (

          <div className="w-full relative">
            <input
              id={props.id}
              ref={ref}
              {...props}
              type={inputType}
              className={` w-full border rounded-md px-3 py-2 focus:outline-none  ${error ? "border-red-500" : "border-gray-300"
                }`}
            />

            {isPassword &&
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="w-[40px] h-[100%] bg-gray-100 flex items-center justify-center border absolute top-1/2 right-0 cursor-pointer -translate-y-[50%]">
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            }
          </div>

        )}

        {error && <p className="mb-0 text-xs text-red-500">{error}</p>}

      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
