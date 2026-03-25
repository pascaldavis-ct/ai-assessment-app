export type Question = {
  id: number
  dimension: string
  shortTitle: string
  question: string
  clarifiers: string[]
  healthyLooksLike: string
  redFlags: string[]
}

export const questions: Question[] = [
  {
    id: 0,
    dimension: "EXEC OWNERSHIP",
    shortTitle: "Sponsorship",
    question: "Who owns AI outcomes—budget, decisions, and accountability—and have leaders used AI enough to sponsor it intelligently?",
    clarifiers: [
      "Is there a named accountable executive with clear cross-functional mandate?",
      "Have execs gotten hands-on—using AI in real workflows (yes, even a little vibe-coding)?",
      "Is there recurring funding and explicit trade-offs (what stopped to make room)?",
      "Are there regular exec-level decisions: ship/scale/kill—not just 'review the demo'?"
    ],
    healthyLooksLike: "Leaders who speak from lived usage (not hearsay), recurring funding, explicit trade-offs, and visible top-down adoption.",
    redFlags: [
      "Sponsorship by slide deck",
      "No exec time on tools",
      "Champions working nights/weekends"
    ]
  },
  {
    id: 1,
    dimension: "PRIORITIZATION",
    shortTitle: "Clarity",
    question: "How evidence-based is the pipeline for selecting and sequencing AI work?",
    clarifiers: [
      "Do you rank use cases by value, feasibility, risk, and data readiness—or by who yells loudest?",
      "Are you solving business outcomes or shopping for models?",
      "Do you have baselines (time, cost, quality) before you 'improve' anything?"
    ],
    healthyLooksLike: "A repeatable rubric (value, feasibility, risk, data readiness, change readiness), use cases framed as outcomes, baselines before claims.",
    redFlags: [
      "A long list of ideas, no ranking",
      "\"We're doing AI everywhere\"",
      "No baselines exist"
    ]
  },
  {
    id: 2,
    dimension: "TRUST & SAFETY",
    shortTitle: "Guardrails",
    question: "Can teams move fast without breaking trust, compliance, or IP?",
    clarifiers: [
      "Can employees tell (in plain English) what data can go where?",
      "Do you tier risk (low/medium/high) with proportionate review gates?",
      "Do you have incident playbooks for leaks, bad outputs, bias, compliance issues?"
    ],
    healthyLooksLike: "Plain-English policy: what data can go where; approved tools; escalation path. Risk tiers with proportionate gates.",
    redFlags: [
      "Shadow AI everywhere",
      "A blanket ban that drives it underground",
      "No incident playbooks"
    ]
  },
  {
    id: 3,
    dimension: "ADOPTION ENGINE",
    shortTitle: "Champions",
    question: "Who is responsible for making AI change how work gets done?",
    clarifiers: [
      "Are champions named in each function—and given time/authority (not just a Slack emoji)?",
      "Is there role-based enablement (execs, managers, frontline, IT/security, legal)?",
      "Are incentives/careers aligned for builders and translators?"
    ],
    healthyLooksLike: "Named champions in functions + product/process owners for key workflows. Time, training, and authority allocated.",
    redFlags: [
      "\"We bought a tool—adoption will happen\"",
      "Champions expected to work after hours",
      "No feedback loops"
    ]
  },
  {
    id: 4,
    dimension: "MOMENTUM",
    shortTitle: "Success",
    question: "Are pilots built to scale—or to impress?",
    clarifiers: [
      "Does every pilot have a time box, baseline, and 'kill or scale' criteria?",
      "Are you measuring value AND adoption (usage, retention, task completion)?",
      "Is there an operating model for scale (support, monitoring, governance, ownership)?"
    ],
    healthyLooksLike: "Time-boxed pilots with baselines and clear kill/scale criteria. Metrics cover value AND adoption. A scaling plan exists.",
    redFlags: [
      "Prototype graveyard",
      "Success defined as 'leadership liked the demo'",
      "No scaling plan"
    ]
  }
]

export const scoreLabels: Record<number, { label: string; description: string }> = {
  1: { label: "Fragile", description: "High risk of AI theater, shadow AI, or reputational damage" },
  2: { label: "Weak", description: "Significant gaps that will cause problems at scale" },
  3: { label: "Promising", description: "Momentum possible, but gaps will show under pressure" },
  4: { label: "Healthy", description: "Strategy is investable; execution is the main risk" },
  5: { label: "Excellent", description: "Strong foundation for compounding advantage" }
}

export function getOverallVerdict(totalScore: number): {
  verdict: "stay" | "cautious" | "go"
  title: string
  description: string
  recommendation: string
} {
  const avgScore = totalScore / 5
  
  if (avgScore >= 3.5) {
    return {
      verdict: "stay",
      title: "STAY & INVEST",
      description: "Your organization shows strong signals of AI readiness. Real ownership, clear priorities, usable guardrails, empowered champions, and pilots with baselines.",
      recommendation: "Focus on execution velocity and scaling successful pilots. Your competitive advantage is compounding."
    }
  } else if (avgScore >= 2.5) {
    return {
      verdict: "cautious",
      title: "PROCEED WITH CAUTION",
      description: "Promising foundations but notable gaps exist. You'll feel the cracks at scale if these aren't addressed.",
      recommendation: "Prioritize closing the weakest dimension gaps before scaling further. The gaps will only amplify."
    }
  } else {
    return {
      verdict: "go",
      title: "HEDGE OR GO",
      description: "High probability of endless demos, no trade-offs, policy by panic, and adoption treated as 'training people to click the button.'",
      recommendation: "Either drive fundamental change from within or consider whether your AI ambitions are better served elsewhere."
    }
  }
}
