"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AlertTriangle, ArrowLeft, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { type Question } from "@/lib/assessment-data"

interface QuestionCardProps {
  question: Question
  questionNumber: number
  totalQuestions: number
  onAnswer: (score: number) => void
  onBack: () => void
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  onBack,
}: QuestionCardProps) {
  const [selectedScore, setSelectedScore] = useState<number | null>(null)
  const [showDetails, setShowDetails] = useState(false)

  const handleSubmit = () => {
    if (selectedScore !== null) {
      onAnswer(selectedScore)
      setSelectedScore(null)
      setShowDetails(false)
    }
  }

  const selectedOption = question.answerOptions.find(opt => opt.score === selectedScore)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Progress Header */}
      <header className="px-6 py-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              <span className="text-sm text-muted-foreground">
                Question {questionNumber} of {totalQuestions}
              </span>
            </div>
            <span className="text-sm font-medium text-accent">{question.dimension}</span>
          </div>
          <div className="h-1 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: `${((questionNumber - 1) / totalQuestions) * 100}%` }}
              animate={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </header>

      {/* Question Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl w-full"
          >
            {/* Question */}
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-4">
                {question.shortTitle}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance mb-6">
                {question.question}
              </h2>
              
              {/* Expandable Details */}
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                {showDetails ? "Hide guidance" : "Show guidance to help you answer"}
              </button>
              
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 space-y-4">
                      {/* Clarifiers */}
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Ask yourself:</h4>
                        <ul className="space-y-2">
                          {question.clarifiers.map((clarifier, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-accent mt-1">•</span>
                              {clarifier}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        {/* Healthy */}
                        <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle2 className="w-4 h-4 text-accent" />
                            <h4 className="text-sm font-semibold text-foreground">Healthy looks like:</h4>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {question.healthyLooksLike}
                          </p>
                        </div>
                        
                        {/* Red Flags */}
                        <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="w-4 h-4 text-destructive" />
                            <h4 className="text-sm font-semibold text-foreground">Red flags:</h4>
                          </div>
                          <ul className="space-y-1">
                            {question.redFlags.map((flag, index) => (
                              <li key={index} className="text-sm text-muted-foreground">
                                • {flag}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Answer Options - Question-specific */}
            <div className="space-y-3">
              {question.answerOptions.map((option) => (
                <button
                  key={option.score}
                  onClick={() => setSelectedScore(option.score)}
                  className={cn(
                    "w-full text-left p-4 rounded-lg border-2 transition-all",
                    selectedScore === option.score
                      ? "border-accent bg-accent/10"
                      : "border-border bg-card hover:border-muted-foreground"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                      selectedScore === option.score
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary text-foreground"
                    )}>
                      {option.score}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={cn(
                        "font-semibold text-sm sm:text-base",
                        selectedScore === option.score ? "text-accent" : "text-foreground"
                      )}>
                        {option.label}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-8">
              <Button
                onClick={handleSubmit}
                disabled={selectedScore === null}
                size="lg"
                className={cn(
                  "px-8 py-6 text-base font-semibold transition-all",
                  selectedScore !== null
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {questionNumber === totalQuestions ? "See Results" : "Next Question"}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="px-6 py-4 border-t border-border">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex gap-1">
            {Array.from({ length: totalQuestions }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  i < questionNumber - 1
                    ? "bg-accent"
                    : i === questionNumber - 1
                    ? "bg-foreground"
                    : "bg-muted"
                )}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            {question.dimension}
          </span>
        </div>
      </footer>
    </div>
  )
}
