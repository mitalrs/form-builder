import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({ children, variant = "primary", className, ...props }) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded-md focus:outline-none focus:ring-2",
        variant === "primary" ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-300 text-black hover:bg-gray-400",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
