import React from "react";

interface RadioGroupProps {
  options: string[];
  name: string;
  onChange?: (value: string) => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ options, name, onChange }) => {
  return (
    <div>
      {options.map((option) => (
        <RadioGroupItem
          key={option}
          name={name}
          value={option}
          onChange={(e) => onChange && onChange(e.target.value)}
        />
      ))}
    </div>
  );
};

export const RadioGroupItem: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ value, ...props }) => {
  return (
    <label className="flex items-center space-x-2">
      <input type="radio" value={value} className="h-4 w-4" {...props} />
      <span>{value}</span>
    </label>
  );
};
