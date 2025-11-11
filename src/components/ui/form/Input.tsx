import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: any;
  label?: string;
  error?: string;
  className?: string;

}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className={className ?? "flex flex-col gap-1"}>
        {label && <label htmlFor={props.id} className="text-sm font-medium">{label}</label>}
        <input
          id={props.id}
          ref={ref}
          {...props}
          className={`border rounded-md px-3 py-2 focus:outline-none  ${error ? "border-red-500" : "border-gray-300"
            }`}
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
