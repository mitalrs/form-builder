import React from "react";

export const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
  return <textarea className="border rounded-md px-3 py-2 w-full focus:ring focus:ring-blue-300" {...props} />;
};
