"use client"

import { useState } from "react"
import { IntroScreen } from "@/components/intro-screen"
import { QuestionCard } from "@/components/question-card"
import { ResultsScreen } from "@/components/results-screen"
import { questions } from "@/lib/assessment-data"

export type Answer = {
  questionId: number
  score: number
}

export default function AIHealthCheck() {
  const [currentStep, setCurrentStep] = useState<"intro" | "questions" | "results">("intro")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])

  const handleStart = () => {
    setCurrentStep("questions")
    setCurrentQuestionIndex(0)
    setAnswers([])
  }

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, { questionId: currentQuestionIndex, score }]
    setAnswers(newAnswers)

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    } else {
      setCurrentStep("results")
    }
  }

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      // Remove the last answer and go back
      setAnswers((prev) => prev.slice(0, -1))
      setCurrentQuestionIndex((prev) => prev - 1)
    } else {
      // Go back to intro
      setCurrentStep("intro")
    }
  }

  const handleRestart = () => {
    setCurrentStep("intro")
    setCurrentQuestionIndex(0)
    setAnswers([])
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {currentStep === "intro" && <IntroScreen onStart={handleStart} />}
      {currentStep === "questions" && (
        <QuestionCard
          question={questions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
          onBack={handleBack}
        />
      )}
      {currentStep === "results" && <ResultsScreen answers={answers} onRestart={handleRestart} />}
    </main>
  )
}
