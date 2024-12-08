"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Form, FormResponse } from "@/types/form"

interface SubmissionsTableProps {
  form: Form
  submissions: FormResponse[]
}

export function SubmissionsTable({ form, submissions }: SubmissionsTableProps) {
  return (
    <div className="container mx-auto py-8">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Submission Date</TableHead>
            {form.questions.map((question) => (
              <TableHead key={question.id}>{question.title}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {submissions.map((submission) => (
            <TableRow key={submission.id}>
              <TableCell>
                {new Date(submission.submittedAt).toLocaleDateString()}
              </TableCell>
              {form.questions.map((question) => (
                <TableCell key={question.id}>
                  {
                    submission.answers.find((a) => a.questionId === question.id)
                      ?.value
                  }
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

