import FormPreview from "../component/FormPreview";
import  { Question } from "../component/FormField"

const FormPreviewPage = ({ questions }: { questions: Question[] }) => {
  return (
    <div>
      <FormPreview questions={questions} />
      {/* Add functionality to submit form */}
    </div>
  );
};

export default FormPreviewPage;
