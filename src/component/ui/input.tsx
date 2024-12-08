import React from "react";

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <input className="border rounded-md px-3 py-2 w-full focus:ring focus:ring-blue-300" {...props} />;
};
