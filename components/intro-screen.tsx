"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Target, Shield, Users, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

interface IntroScreenProps {
  onStart: () => void
}

const dimensions = [
  { icon: Sparkles, label: "Sponsorship", description: "Who owns AI with real authority and hands-on experience?" },
  { icon: Target, label: "Roadmap", description: "Is there a clear AI roadmap—clear to all?" },
  { icon: Shield, label: "Guardrails", description: "Can teams move fast without breaking trust?" },
  { icon: Users, label: "Champions", description: "Who makes adoption actually happen?" },
  { icon: Rocket, label: "Momentum", description: "Are pilots built to scale—or just to impress?" },
]

export function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="px-6 py-6 border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-foreground">code&theory</span>
          </div>
          <span className="text-sm text-muted-foreground hidden sm:block">AI Strategy Assessment</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              AI Adoption Health Check
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
              Is your AI strategy{" "}
              <span className="text-accent">a strong bet</span>—or just{" "}
              <span className="text-muted-foreground">AI theater?</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
              Your company&apos;s AI strategy isn&apos;t just a boardroom topic—it&apos;s a signal about your future. 
              The question isn&apos;t whether leadership talks about transformation—everyone does. It&apos;s whether 
              they&apos;re building something real. Whether you&apos;re leading the charge or betting your career 
              on the outcome, five questions reveal if you&apos;re in a strong bet or stuck in AI theater.
            </p>
          </motion.div>

          {/* Dimension Preview Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12"
          >
            {dimensions.map((dim, index) => (
              <motion.div
                key={dim.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-card border border-border rounded-lg p-4 hover:border-accent/50 transition-colors"
              >
                <dim.icon className="w-5 h-5 text-accent mb-3" />
                <h3 className="font-semibold text-sm text-foreground mb-1">{dim.label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{dim.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center space-y-4"
          >
            <Button
              onClick={onStart}
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-semibold group"
            >
              Start Assessment
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-xs text-muted-foreground">
              5 minutes • 5 questions • Instant results
            </p>
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
            For boards, executives & ambitious operators
          </p>
        </div>
      </footer>
    </div>
  )
}
