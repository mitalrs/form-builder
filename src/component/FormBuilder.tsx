"use client";

import { useState } from "react";
import { Plus, Settings2, Trash2 } from "lucide-react";
import { Button } from "@/component/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/component/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/component/ui/select";
import { Input } from "@/component/ui/input";
import { Textarea } from "@/component/ui/textarea";
import { Switch } from "@/component/ui/switch";
import { Label } from "@/component/ui/label";
import { RadioGroup, RadioGroupItem } from "@/component/ui/radio-group";
import { toast } from "sonner";
import { Question, QuestionType } from "@/type/form";

const questionTypes: { value: QuestionType; label: string }[] = [
  { value: "short", label: "Short answer" },
  { value: "long", label: "Long answer" },
  { value: "single", label: "Single select" },
  { value: "number", label: "Number" },
  { value: "url", label: "URL" },
];

export function FormBuilder() {
  const [title, setTitle] = useState("Untitled Form");
  const [questions, setQuestions] = useState<Question[]>([]);

  const addQuestion = () => {
    const newQuestion: Question = {
      id: crypto.randomUUID(),
      type: "short",
      title: "Untitled Question",
      required: false,
      options: [],
    };
    setQuestions([...questions, newQuestion]);
  };

  const updateQuestion = (id: string, updates: Partial<Question>) => {
    setQuestions(
      questions.map((q) => (q.id === id ? { ...q, ...updates } : q))
    );
  };

  const removeQuestion = (id: string) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const handlePublish = async () => {
    try {
      // Typically save the form to your backend here
      toast.success("Form published successfully!");
    } catch (error) {
      toast.error("Failed to publish form");
    }
  };

  return (
    <div className="container mx-auto py-8 max-w-3xl">
      <Card>
        <CardHeader>
          <Input
            type="text"
            value={title}
            onChange={(e:any) => setTitle(e.target.value)}
            className="text-2xl font-bold border-none px-0 focus-visible:ring-0"
          />
        </CardHeader>
        <CardContent>
          {questions.map((question) => (
            <div key={question.id} className="mb-4">
              <Card>
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="flex-1 space-y-2">
                    <Input
                      type="text"
                      value={question.title}
                      onChange={(e:any) =>
                        updateQuestion(question.id, { title: e.target.value })
                      }
                      placeholder="Question title"
                      className="text-lg font-medium"
                    />
                    <Select>
                      <SelectTrigger>
                        {question.type || "Select Question Type"}
                      </SelectTrigger>
                      <SelectContent>
                        {questionTypes.map((type) => (
                          <SelectItem
                            key={type.value}
                            value={type.value}
                            onClick={() =>
                              updateQuestion(question.id, { type: type.value })
                            }
                          >
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                      <Switch
                        id={`required-${question.id}`}
                        checked={question.required}
                        onCheckedChange={(checked:any) =>
                          updateQuestion(question.id, { required: checked })
                        }
                      />
                      <Label htmlFor={`required-${question.id}`}>Required</Label>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeQuestion(question.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {question.type === "short" && (
                    <Input disabled placeholder="Short answer text" />
                  )}
                  {question.type === "long" && (
                    <Textarea disabled placeholder="Long answer text" />
                  )}
                  {question.type === "single" && (
                    <RadioGroup>
                      {question.options?.map(({option, i}:any) => (
                        <div key={i} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} />
                          <Label>{option}</Label>
                        </div>
                      ))}
                      <Button
                        variant="ghost"
                        className="mt-2"
                        onClick={() =>
                          updateQuestion(question.id, {
                            options: [
                              ...(question.options || []),
                              `Option ${(question.options?.length || 0) + 1}`,
                            ],
                          })
                        }
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Option
                      </Button>
                    </RadioGroup>
                  )}
                  {question.type === "number" && (
                    <Input type="number" disabled placeholder="Number input" />
                  )}
                  {question.type === "url" && (
                    <Input type="url" disabled placeholder="URL input" />
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={addQuestion}>
            <Plus className="h-4 w-4 mr-2" />
            Add Question
          </Button>
          <div className="flex gap-2">
            <Button variant="outline">Save as Draft</Button>
            <Button onClick={handlePublish}>Publish Form</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
