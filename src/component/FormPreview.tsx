"use client"

import { useState } from "react"
import { Form, Question } from "@/type/form"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { toast } from "sonner"

interface FormPreviewProps {
  form: Form
}

export function FormPreview({ form }: FormPreviewProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({})

  const updateAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const calculateProgress = () => {
    const requiredQuestions = form.questions.filter((q) => q.required)
    if (requiredQuestions.length === 0) return 100
    const answeredRequired = requiredQuestions.filter(
      (q) => answers[q.id]?.trim()
    ).length
    return Math.round((answeredRequired / requiredQuestions.length) * 100)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Here you would typically submit the form responses to your backend
      toast.success("Form submitted successfully!")
    } catch (error) {
      toast.error("Failed to submit form")
    }
  }

  return (
    <div className="container mx-auto py-8 max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle>{form.title}</CardTitle>
          <Progress value={calculateProgress()} className="mt-2" />
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {form.questions.map((question) => (
              <div key={question.id} className="space-y-2">
                <Label>
                  {question.title}
                  {question.required && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                </Label>
                {question.type === "short" && (
                  <Input
                    required={question.required}
                    value={answers[question.id] || ""}
                    onChange={(e) => updateAnswer(question.id, e.target.value)}
                  />
                )}
                {question.type === "long" && (
                  <Textarea
                    required={question.required}
                    value={answers[question.id] || ""}
                    onChange={(e) => updateAnswer(question.id, e.target.value)}
                  />
                )}
                {question.type === "single" && (
                  <RadioGroup
                    required={question.required}
                    value={answers[question.id]}
                    onValueChange={(value) => updateAnswer(question.id, value)}
                  >
                    {question.options?.map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} />
                        <Label>{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                )}
                {question.type === "number" && (
                  <Input
                    type="number"
                    required={question.required}
                    value={answers[question.id] || ""}
                    onChange={(e) => updateAnswer(question.id, e.target.value)}
                  />
                )}
                {question.type === "url" && (
                  <Input
                    type="url"
                    required={question.required}
                    value={answers[question.id] || ""}
                    onChange={(e) => updateAnswer(question.id, e.target.value)}
                  />
                )}
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button type="submit">Submit</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

