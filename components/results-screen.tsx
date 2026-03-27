"use client"

import { motion } from "framer-motion"
import { ArrowRight, RotateCcw, Share2, Sparkles, Target, Shield, Users, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { type Answer } from "@/app/page"
import { questions, getOverallVerdict } from "@/lib/assessment-data"

interface ResultsScreenProps {
  answers: Answer[]
  onRestart: () => void
}

const dimensionIcons = [Sparkles, Target, Shield, Users, Rocket]

export function ResultsScreen({ answers, onRestart }: ResultsScreenProps) {
  const totalScore = answers.reduce((sum, a) => sum + a.score, 0)
  const avgScore = totalScore / answers.length
  const verdict = getOverallVerdict(totalScore)

  const handleShare = async () => {
    const shareText = `I scored ${avgScore.toFixed(1)}/5 on the AI Adoption Health Check by Code&Theory. Verdict: ${verdict.title}. Take the assessment:`
    const shareUrl = window.location.href
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: "AI Adoption Health Check Results",
          text: shareText,
          url: shareUrl,
        })
      } catch {
        // User cancelled or share failed
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(`${shareText} ${shareUrl}`)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="px-6 py-6 border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-foreground">code&theory</span>
          </div>
          <span className="text-sm text-muted-foreground">Assessment Complete</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 px-6 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Verdict Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              Your AI Readiness Score
            </p>
            
            {/* Big Score */}
            <div className="mb-6">
              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block text-7xl sm:text-8xl md:text-9xl font-bold text-foreground"
              >
                {avgScore.toFixed(1)}
              </motion.span>
              <span className="text-2xl sm:text-3xl text-muted-foreground ml-2">/5</span>
            </div>

            {/* Verdict Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={cn(
                "inline-flex items-center px-6 py-3 rounded-full text-lg font-bold mb-6",
                verdict.verdict === "stay" && "bg-accent/20 text-accent",
                verdict.verdict === "cautious" && "bg-yellow-500/20 text-yellow-400",
                verdict.verdict === "go" && "bg-destructive/20 text-destructive"
              )}
            >
              {verdict.title}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty"
            >
              {verdict.description}
            </motion.p>
          </motion.div>

          {/* Dimension Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
              Breakdown by Dimension
            </h3>
            <div className="grid gap-4">
              {answers.map((answer, index) => {
                const question = questions[answer.questionId]
                const Icon = dimensionIcons[index]
                const answerOption = question.answerOptions.find(opt => opt.score === answer.score)
                
                return (
                  <motion.div
                    key={answer.questionId}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="bg-card border border-border rounded-lg p-4 sm:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-4 mb-2">
                          <div>
                            <h4 className="font-semibold text-foreground">{question.dimension}</h4>
                            <p className="text-sm text-muted-foreground">{question.shortTitle}</p>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <span className="text-2xl font-bold text-foreground">{answer.score}</span>
                            <span className="text-sm text-muted-foreground">/5</span>
                          </div>
                        </div>
                        
                        {/* Score Bar */}
                        <div className="h-2 bg-secondary rounded-full overflow-hidden mb-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(answer.score / 5) * 100}%` }}
                            transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                            className={cn(
                              "h-full rounded-full",
                              answer.score >= 4 && "bg-accent",
                              answer.score === 3 && "bg-yellow-500",
                              answer.score <= 2 && "bg-destructive"
                            )}
                          />
                        </div>
                        
                        {answerOption && (
                          <p className={cn(
                            "text-xs font-medium",
                            answer.score >= 4 && "text-accent",
                            answer.score === 3 && "text-yellow-400",
                            answer.score <= 2 && "text-destructive"
                          )}>
                            {answerOption.label}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Recommendation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="bg-card border border-accent/30 rounded-lg p-6 sm:p-8 mb-12"
          >
            <h3 className="text-lg font-semibold text-foreground mb-3">Recommendation</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {verdict.recommendation}
            </p>
            
            <div className="bg-secondary/50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-foreground mb-2">Board Questions That Cut Through the Fog:</h4>
              <ol className="text-sm text-muted-foreground space-y-2">
                <li>1. What did we <strong className="text-foreground">stop doing</strong> to fund AI priorities?</li>
                <li>2. Show me <strong className="text-foreground">three use cases</strong> with owners, baselines, and a 90-day plan.</li>
                <li>3. What&apos;s our <strong className="text-foreground">approved tool and data policy</strong> in one page?</li>
                <li>4. Who runs the <strong className="text-foreground">adoption engine</strong> (champions, training, operating model)?</li>
                <li>5. For the top pilot: what are the <strong className="text-foreground">kill/scale thresholds</strong>, and when do we decide?</li>
              </ol>
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={handleShare}
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 px-6 py-6 text-base font-semibold group"
            >
              <Share2 className="mr-2 w-4 h-4" />
              Share Results
            </Button>
            <Button
              onClick={onRestart}
              variant="outline"
              size="lg"
              className="border-border hover:bg-secondary px-6 py-6 text-base font-semibold group"
            >
              <RotateCcw className="mr-2 w-4 h-4" />
              Take Again
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-muted-foreground hover:text-foreground px-6 py-6 text-base group"
            >
              <a href="https://www.codeandtheory.com" target="_blank" rel="noopener noreferrer">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            Based on research by Code&Theory&apos;s AI Strategy Practice
          </p>
          <p className="text-xs text-muted-foreground">
            Share this assessment on LinkedIn to help others evaluate their AI readiness
          </p>
        </div>
      </footer>
    </div>
  )
}
