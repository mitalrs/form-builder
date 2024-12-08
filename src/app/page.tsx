import Image from "next/image";
import FormBuilder from "@/component/FormBuilder";

export default function Home() {
  return (
   <div>
    <h1 className="text-3xl">Form Builder</h1>
    <FormBuilder />
   </div>
  );
}
