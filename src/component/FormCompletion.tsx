const FormCompletion = ({ filledFields, totalFields }: { filledFields: number; totalFields: number }) => {
    const percentage = Math.round((filledFields / totalFields) * 100);
    return <div>Form Completion: {percentage}%</div>;
  };
  
  export default FormCompletion;
  