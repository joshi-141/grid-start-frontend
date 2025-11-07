import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  className,
  ...props
}) => {
  return (
    <button {...props} className={`${className}`}>
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
