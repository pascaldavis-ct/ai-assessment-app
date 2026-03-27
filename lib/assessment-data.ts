export type AnswerOption = {
  score: number
  label: string
  description: string
}

export type Question = {
  id: number
  dimension: string
  shortTitle: string
  question: string
  clarifiers: string[]
  healthyLooksLike: string
  redFlags: string[]
  answerOptions: AnswerOption[]
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
    ],
    answerOptions: [
      {
        score: 1,
        label: "No clear owner",
        description: "AI is everyone's hobby, no one's job. No named exec, no budget line, no accountability."
      },
      {
        score: 2,
        label: "Sponsor in name only",
        description: "Someone's name is on it, but they haven't used AI and decisions happen by committee or not at all."
      },
      {
        score: 3,
        label: "Emerging ownership",
        description: "A leader is accountable with some budget, but limited hands-on experience and inconsistent decision-making."
      },
      {
        score: 4,
        label: "Active, informed sponsor",
        description: "Named exec with budget authority who has used AI personally and makes regular ship/scale/kill decisions."
      },
      {
        score: 5,
        label: "Hands-on champion",
        description: "Exec owner with deep hands-on experience, recurring funding, explicit trade-offs, and visible adoption from the top."
      }
    ]
  },
  {
    id: 1,
    dimension: "PRIORITIZATION",
    shortTitle: "Roadmap",
    question: "Is there a clear AI roadmap—clear to all—and is it based on evidence or enthusiasm?",
    clarifiers: [
      "Do you rank use cases by value, feasibility, risk, and data readiness—or by who yells loudest?",
      "Are you solving business outcomes or shopping for models?",
      "Do you have baselines (time, cost, quality) before you 'improve' anything?"
    ],
    healthyLooksLike: "Clear criteria for evaluating opportunities (value, feasibility, risk, data readiness), use cases framed as outcomes, baselines before claims.",
    redFlags: [
      "A long list of ideas, no ranking",
      "\"We're doing AI everywhere\"",
      "No baselines exist"
    ],
    answerOptions: [
      {
        score: 1,
        label: "No roadmap",
        description: "Just a wish list of 'AI ideas' with no prioritization or success criteria."
      },
      {
        score: 2,
        label: "Vibes-based roadmap",
        description: "A plan exists but driven by hype cycles, vendor demos, or loudest voices."
      },
      {
        score: 3,
        label: "Partially grounded",
        description: "Some evidence and business cases exist but inconsistently applied."
      },
      {
        score: 4,
        label: "Evidence-based roadmap",
        description: "Priorities ranked by real value and feasibility, baselines defined before 'improvement' claims."
      },
      {
        score: 5,
        label: "Disciplined roadmap",
        description: "Clear sequencing, every initiative has baselines and kill criteria, outcome-focused."
      }
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
    ],
    answerOptions: [
      {
        score: 1,
        label: "No guardrails",
        description: "Either a blanket ban (driving shadow AI underground) or complete wild west—both are failing."
      },
      {
        score: 2,
        label: "Reactive policies",
        description: "Rules exist but are unclear, inconsistent, or created in response to incidents rather than ahead of them."
      },
      {
        score: 3,
        label: "Basic framework",
        description: "Policy exists and is somewhat understood. Some approved tools, but gaps in risk tiers and incident response."
      },
      {
        score: 4,
        label: "Clear, tiered approach",
        description: "Plain-English policy with approved tools, risk tiers, and proportionate gates. Teams know the rules."
      },
      {
        score: 5,
        label: "Enabling guardrails",
        description: "Comprehensive, clear policy that enables speed. Risk tiers, incident playbooks, and escalation paths all in place."
      }
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
    ],
    answerOptions: [
      {
        score: 1,
        label: "No one owns adoption",
        description: "\"We bought tools—adoption will happen.\" Spoiler: it won't. No named champions, no enablement."
      },
      {
        score: 2,
        label: "Informal champions",
        description: "Some enthusiasts exist but work on adoption in spare time. No formal authority or training support."
      },
      {
        score: 3,
        label: "Recognized but under-resourced",
        description: "Champions are named but lack dedicated time, training budget, or real authority to drive change."
      },
      {
        score: 4,
        label: "Empowered champion network",
        description: "Named champions across functions with time, training, and authority. Role-based enablement exists."
      },
      {
        score: 5,
        label: "Adoption engine running",
        description: "Champion network with full support, career incentives aligned, feedback loops to product/policy, top-to-bottom enablement."
      }
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
    ],
    answerOptions: [
      {
        score: 1,
        label: "Demo theater",
        description: "Pilots built to impress leadership, not to scale. No baselines, no kill criteria. Prototype graveyard growing."
      },
      {
        score: 2,
        label: "Pilots without rigor",
        description: "Some pilots running but unclear success criteria. Value claims without baselines. No scaling plan."
      },
      {
        score: 3,
        label: "Mixed discipline",
        description: "Some pilots have baselines and criteria, others don't. Scaling path exists in theory but untested."
      },
      {
        score: 4,
        label: "Structured pilots",
        description: "Time-boxed pilots with baselines, kill/scale criteria, and value + adoption metrics. Scaling plan defined."
      },
      {
        score: 5,
        label: "Scale-ready momentum",
        description: "All pilots instrumented with clear criteria. Operating model for scale proven. Pilots ship or die quickly with learnings captured."
      }
    ]
  }
]

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
      title: "STRONG BET",
      description: "Your organization shows strong signals of AI readiness. Real ownership, clear priorities, usable guardrails, empowered champions, and pilots with baselines.",
      recommendation: "Focus on execution velocity and scaling successful pilots. Your competitive advantage is compounding."
    }
  } else if (avgScore >= 2.5) {
    return {
      verdict: "cautious",
      title: "MIXED SIGNALS",
      description: "Promising foundations but notable gaps exist. You'll feel the cracks at scale if these aren't addressed.",
      recommendation: "Prioritize closing the weakest dimension gaps before scaling further. The gaps will only amplify."
    }
  } else {
    return {
      verdict: "go",
      title: "AI THEATER",
      description: "High probability of endless demos, no trade-offs, policy by panic, and adoption treated as 'training people to click the button.'",
      recommendation: "Either drive fundamental change from within or consider whether your AI ambitions are better served elsewhere."
    }
  }
}
