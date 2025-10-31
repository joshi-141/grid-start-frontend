import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: "primary" | "secondary";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  variant = "primary",
  className,
  ...props
}) => {
  const base =
    "px-4 py-2 rounded-md text-sm font-medium transition-colors disabled:opacity-60";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button {...props} className={`${base} ${variants[variant]} ${className}`}>
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
