import React, { useState } from "react";

interface SwitchProps {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const Switch: React.FC<SwitchProps> = ({ defaultChecked, onChange }) => {
  const [checked, setChecked] = useState(defaultChecked || false);

  const toggle = () => {
    setChecked(!checked);
    if (onChange) onChange(!checked);
  };

  return (
    <div
      onClick={toggle}
      className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
        checked ? "bg-blue-500" : ""
      }`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ${
          checked ? "translate-x-5" : ""
        }`}
      />
    </div>
  );
};
