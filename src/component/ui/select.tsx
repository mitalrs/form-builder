import React from "react";

export const Select: React.FC = ({ children }:any) => {
  return <div className="relative">{children}</div>;
};

export const SelectTrigger: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button
      {...props}
      className="border rounded-md px-3 py-2 w-full text-left focus:ring focus:ring-blue-300"
    >
      {props.children}
    </button>
  );
};

export const SelectContent: React.FC = ({ children }:any) => {
  return <div className="absolute bg-white border rounded-md mt-1">{children}</div>;
};

export const SelectItem: React.FC<{ value: string; onClick?: () => void }> = ({ value, onClick }) => {
  return (
    <div
      className="px-3 py-2 cursor-pointer hover:bg-gray-200"
      onClick={onClick}
    >
      {value}
    </div>
  );
};

