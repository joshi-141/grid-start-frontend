import React from "react";

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-1 ${className} `}>
        <label className="flex items-center gap-2">
          <input
            ref={ref}
            type="checkbox"
            {...props}
            className={`h-4 w-4 accent-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500`}
          />
          {label && <span className="text-sm font-medium">{label}</span>}
        </label>
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

CheckBox.displayName = "CheckBox";

export default CheckBox;
