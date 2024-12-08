import React from "react";

export type Question = {
  id: string;
  type: string;
  label: string;
  options?: string[]; // Only for "Single select"
};

const FormField = ({ question }: { question: Question }) => {
  switch (question.type) {
    case "Short answer":
      return <input type="text" placeholder={question.label} className="border p-2" />;
    case "Long answer":
      return <textarea placeholder={question.label} className="border p-2" />;
    case "Single select":
      return (
        <select className="border p-2">
          {question.options?.map((option, idx) => (
            <option key={idx} value={option}>{option}</option>
          ))}
        </select>
      );
    case "Number":
      return <input type="number" placeholder={question.label} className="border p-2" />;
    case "URL":
      return <input type="url" placeholder={question.label} className="border p-2" />;
    default:
      return null;
  }
};

export default FormField;
