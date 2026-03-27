"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FrameworkPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-6 py-6 border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="text-xl font-bold tracking-tight text-foreground">code&theory</span>
          </Link>
          <Link href="/">
            <Button variant="outline" size="sm" className="border-border hover:bg-secondary">
              Take the Assessment
              <ArrowRight className="ml-2 w-3 h-3" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="px-6 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              AI Strategy Framework
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
              The Five Pillars of AI Transformation Health
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A Framework for Leaders and Contributors
            </p>
            <div className="mt-8 pt-8 border-t border-border flex items-center gap-4">
              <div>
                <p className="text-sm font-medium text-foreground">Code&Theory AI Strategy Practice</p>
                <p className="text-xs text-muted-foreground">10 min read</p>
              </div>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {/* Introduction */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">Introduction: New Technology, Timeless Principles</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In 1987, Tim Knoster gave us a simple model explaining why organizational change fails. You need Vision, Skills, Incentives, Resources, and an Action Plan. Miss one element, get a predictable failure mode.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nearly four decades later, as AI reshapes every industry, these truths remain unchanged. The technology is revolutionary; the organizational dynamics are not. AI transformation fails for the same reasons every transformation fails: not because the technology doesn&apos;t work, but because the human systems surrounding it are incomplete.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This framework translates Knoster&apos;s wisdom for the AI age. Five diagnostic questions. Five pillars. Miss one, and you&apos;re building on sand.
              </p>
              <p className="text-sm text-muted-foreground/70 italic">
                Note: This framework is indebted to great thinkers who&apos;ve shaped my understanding of organizational change and AI transformation, notably Melissa Reeve, whose insights on the human dimensions of technology adoption have been invaluable.
              </p>
            </section>

            {/* The Five Pillars */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-10 pb-4 border-b border-border">The Five Pillars</h2>

              {/* Pillar 1 */}
              <div className="mb-14">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-accent font-bold text-lg">01</span>
                  <h3 className="text-2xl font-bold text-foreground">Sponsorship: The Commitment Question</h3>
                </div>
                <p className="text-xl text-foreground font-medium mb-6 pl-8 border-l-2 border-accent">
                  Does your CEO actually give a damn, or did they just delegate this to IT?
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Real sponsorship means hard choices: budget reallocations, organizational restructuring, strategic pivots. If your &quot;AI strategy&quot; hasn&apos;t required any difficult decisions, you don&apos;t have a strategy. You have a hobby.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <span className="text-foreground font-medium">The tell:</span> Does your CEO use AI tools themselves, or do they just give speeches about how important AI is while barely dabbling with consumer LLMs on a personal account? When AI initiatives conflict with traditional priorities—and they will—who wins?
                </p>
                <div className="bg-card border border-border rounded-lg p-4 mt-6">
                  <p className="text-sm text-destructive font-medium mb-2">Without it:</p>
                  <p className="text-sm text-muted-foreground">False starts. Lots of activity, zero traction. The organization&apos;s immune system rejects anything that threatens the status quo.</p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="mb-14">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-accent font-bold text-lg">02</span>
                  <h3 className="text-2xl font-bold text-foreground">Clarity: The Prioritization Question</h3>
                </div>
                <p className="text-xl text-foreground font-medium mb-6 pl-8 border-l-2 border-accent">
                  Do you have a strategy, or just a collection of pilots that will never ship?
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Most organizations want everything: chatbots, predictive analytics, automated workflows, generative content, code assistants. The result? A dozen pilots, zero production systems, and a portfolio assembled by a committee that couldn&apos;t say no.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Real clarity means explaining—in one sentence—what problems you&apos;re solving with AI and why those problems matter more than the hundred other things you could be doing. It means explicit criteria for evaluating opportunities. It means killing underperforming initiatives instead of letting them zombie along.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <span className="text-foreground font-medium">Acid test:</span> Can you explain why you&apos;re <em>not</em> pursuing certain AI applications? If everything is a priority, nothing is.
                </p>
                <div className="bg-card border border-border rounded-lg p-4 mt-6">
                  <p className="text-sm text-destructive font-medium mb-2">Without it:</p>
                  <p className="text-sm text-muted-foreground">Confusion. Energy dissipates across too many initiatives. Nothing reaches escape velocity. Two years later, you&apos;re still running pilots.</p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="mb-14">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-accent font-bold text-lg">03</span>
                  <h3 className="text-2xl font-bold text-foreground">Safety: The Governance Question</h3>
                </div>
                <p className="text-xl text-foreground font-medium mb-6 pl-8 border-l-2 border-accent">
                  Have you thought through what happens when your AI screws up, or are you just hoping it won&apos;t?
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Every organization falls into one of two camps: the &quot;move fast and break things&quot; crowd who will break something that matters, or the &quot;six-month ethics review&quot; crowd who will still be debating governance when competitors ship.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mature organizations build safety <em>into</em> speed. Clear, practical guidelines that employees actually use. Lightweight review processes that scale. Testing for bias and accuracy before deployment, not after the lawsuit.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The question isn&apos;t whether you have policies—everyone has policies. The question is whether those policies help teams move faster safely, or whether they&apos;re CYA documents while everyone routes around them using consumer AI tools on personal devices.
                </p>
                <div className="bg-card border border-border rounded-lg p-4 mt-6">
                  <p className="text-sm text-destructive font-medium mb-2">Without it:</p>
                  <p className="text-sm text-muted-foreground">Recklessness followed by paralysis. You move fast, accumulate risk, something blows up, and the pendulum swings hard. Now nobody can ship anything.</p>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="mb-14">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-accent font-bold text-lg">04</span>
                  <h3 className="text-2xl font-bold text-foreground">Staff: The People Question</h3>
                </div>
                <p className="text-xl text-foreground font-medium mb-6 pl-8 border-l-2 border-accent">
                  Are you building organizational capability, or just buying tools and hoping people figure it out?
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <span className="text-foreground font-medium">What doesn&apos;t work:</span> hiring a Chief AI Officer, buying enterprise AI licenses, declaring victory. One person can&apos;t transform an organization. Software licenses don&apos;t change behavior.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <span className="text-foreground font-medium">What works:</span> Identifying champions across functions and levels. Giving them protected time and actual authority. Building AI literacy broadly—not just training specialists, but ensuring everyone understands enough to be dangerous. Creating career paths that reward AI adoption, not just AI expertise.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The hard part isn&apos;t the technology. It&apos;s addressing the fear and resistance that accompany automation. Do people see AI as a threat or as a tool that makes their work more valuable? That&apos;s not a technology question. That&apos;s a leadership question.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Watch your high performers. If they&apos;re leaving because they don&apos;t see a future in your AI-enabled organization, you have your answer about whether you&apos;re investing in people or extracting value from them.
                </p>
                <div className="bg-card border border-border rounded-lg p-4 mt-6">
                  <p className="text-sm text-destructive font-medium mb-2">Without it:</p>
                  <p className="text-sm text-muted-foreground">Anxiety. Employees feel threatened, unprepared, disengaged. You can&apos;t automate your way out of a culture problem.</p>
                </div>
              </div>

              {/* Pillar 5 */}
              <div className="mb-14">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-accent font-bold text-lg">05</span>
                  <h3 className="text-2xl font-bold text-foreground">Success: The Momentum Question</h3>
                </div>
                <p className="text-xl text-foreground font-medium mb-6 pl-8 border-l-2 border-accent">
                  Are you learning and building on wins, or running disconnected experiments that add up to nothing?
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pilots are easy. Production is hard. Scaling is harder. Most organizations get stuck in pilot purgatory—running the same &quot;proof of concept&quot; for different audiences over multiple years, never quite ready to commit.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Real momentum means clear success criteria defined upfront. Business outcomes, not just technical metrics. (Nobody cares that your model achieved 95% accuracy if it doesn&apos;t move a number that matters.) Sharing learnings—successes and failures—across the organization. Clear pathways from pilot to production with decision points and kill criteria.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <span className="text-foreground font-medium">The flywheel effect:</span> each success should make the next one easier. If every initiative feels like starting from scratch, you&apos;re not building organizational capability. You&apos;re just keeping consultants employed.
                </p>
                <div className="bg-card border border-border rounded-lg p-4 mt-6">
                  <p className="text-sm text-destructive font-medium mb-2">Without it:</p>
                  <p className="text-sm text-muted-foreground">Frustration. People work hard but can&apos;t see progress. Skepticism grows. Three years later, you&apos;re still talking about &quot;potential&quot; instead of results.</p>
                </div>
              </div>
            </section>

            {/* Using This Framework */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-10 pb-4 border-b border-border">Using This Framework</h2>

              {/* For Executives */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-foreground mb-6">For Executives and Boards</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Score yourself on each pillar, 1-5. Be honest—lying to yourself is expensive.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-4 p-4 bg-accent/10 border border-accent/20 rounded-lg">
                    <span className="text-accent font-bold">20-25:</span>
                    <p className="text-muted-foreground">You&apos;re positioned to win. Don&apos;t get cocky.</p>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <span className="text-yellow-400 font-bold">15-19:</span>
                    <p className="text-muted-foreground">Solid foundation, critical gaps. Your lowest score is your constraint. Fix it.</p>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                    <span className="text-orange-400 font-bold">10-14:</span>
                    <p className="text-muted-foreground">You&apos;re at risk. Isolated wins, not transformation.</p>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <span className="text-destructive font-bold">Below 10:</span>
                    <p className="text-muted-foreground">Stop. You&apos;re not ready. Build foundations or waste millions proving organizational change is hard.</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Knoster&apos;s insight still holds: your weakest element determines your outcome. You can&apos;t compensate for missing sponsorship with better technology. You can&apos;t compensate for missing clarity with more pilots.
                </p>
              </div>

              {/* For Professionals */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-foreground mb-6">For Professionals: Should I Stay or Should I Go?</h3>
                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-card border border-border rounded-lg">
                    <p className="text-accent font-bold mb-2">Stay and invest</p>
                    <p className="text-muted-foreground text-sm">if your organization scores 4-5 on at least three pillars and leadership is actively addressing gaps. You have access to interesting problems, good data, supportive leadership. You&apos;re learning and shipping.</p>
                  </div>
                  <div className="p-4 bg-card border border-border rounded-lg">
                    <p className="text-yellow-400 font-bold mb-2">Stay but hedge</p>
                    <p className="text-muted-foreground text-sm">if your organization scores 3-4 on most pillars. Progress is slow but directional. Build external networks. Keep options open.</p>
                  </div>
                  <div className="p-4 bg-card border border-border rounded-lg">
                    <p className="text-destructive font-bold mb-2">Get out</p>
                    <p className="text-muted-foreground text-sm">if your organization scores 1-2 on multiple pillars with no evidence of serious commitment. You&apos;re fighting organizational antibodies more than building solutions. Your skills are stagnating. Life is too short.</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-medium">Career calculus:</span> Early career, prioritize learning over impact. Late career, prioritize organizations where you can drive change.
                </p>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">Conclusion</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The technology is not the hard part. AI capabilities are advancing faster than most organizations can absorb them.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The hard part is the same as it&apos;s always been: aligning leadership, clarifying strategy, managing risk, developing people, building momentum. These are human challenges, not technical ones.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Knoster understood this in 1987. This framework simply translates his wisdom for the AI age. The components have new names—Sponsorship, Clarity, Safety, Staff, Success—but the underlying truth is unchanged: transformation requires all elements working together.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Miss one, face predictable failure. Get all five right, and you&apos;ll be positioned not just to adopt AI, but to be transformed by it in ways that create lasting competitive advantage.
              </p>
              <div className="bg-card border border-accent/30 rounded-lg p-6 mt-8">
                <p className="text-foreground font-medium mb-2">The question isn&apos;t whether AI will transform your industry. It will.</p>
                <p className="text-muted-foreground">The question is whether your organization will lead the transformation—or be transformed by others.</p>
                <p className="text-accent font-medium mt-4">These five pillars will tell you which path you&apos;re on.</p>
              </div>
            </section>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-12 border-t border-border text-center"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Ready to assess your organization?
            </p>
            <Link href="/">
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-semibold group"
              >
                Take the Assessment
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </article>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-border">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Code&Theory AI Strategy Practice
          </p>
          <Link 
            href="https://www.codeandtheory.com" 
            target="_blank"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            codeandtheory.com
          </Link>
        </div>
      </footer>
    </div>
  )
}
