import React from "react";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options?: SelectOption[];
  className?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options = [], className, ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-1 ${className ?? ""}`}>
        {/* Label */}
        {label && (
          <label
            htmlFor={props.id}
            className="text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}

        {/* Wrapper for custom icon */}
        <div className="relative">
          <select
            ref={ref}
            {...props}
            className={`appearance-none w-full border rounded-md px-3 py-2 pr-8 text-sm bg-white text-gray-700 
              focus:outline-none transition ${error ? "border-red-500" : "border-gray-300"}
            `}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} >
               <span> {opt.label}</span>
              </option>
            ))}
          </select>

          {/* Custom Dropdown Icon */}
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>

        {/* Error Message */}
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
