import React from "react";

export const Label: React.FC<{ htmlFor: string }> = ({ children, htmlFor }:any) => {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
      {children}
    </label>
  );
};