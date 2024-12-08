import React from "react";

interface ProgressProps {
  value: number;
  max: number;
}

export const Progress: React.FC<ProgressProps> = ({ value, max }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(value / max) * 100}%` }}></div>
    </div>
  );
};
