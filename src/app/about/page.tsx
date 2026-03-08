'use client'

import { PageHero } from '@/components/PageHero'
import { CTASection } from '@/components/CTASection'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn'
import { ShieldCheck, Zap, Users, Target } from 'lucide-react'

const values = [
  { icon: ShieldCheck, title: 'Security First', description: 'AES-256-GCM encryption, per-tenant isolation, PII masking, and audit logging built into every feature from day one.' },
  { icon: Zap, title: 'AI at the Core', description: 'Every data model and workflow was designed assuming AI would read, write, and reason about the data. AI is the architecture, not a bolt-on.' },
  { icon: Users, title: 'Lender-Centric', description: 'Built alongside a real mortgage lender. Every feature solves an actual operational pain point observed in daily lending workflows.' },
  { icon: Target, title: 'Relentless Execution', description: '166,000 lines of production code, 30+ backend modules, and 12,700 automated tests. Built by one engineer using AI as a force multiplier.' },
]

const team = [
  { name: 'Joey Pereira', role: 'Founder & CEO', initials: 'JP' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Adamas LOS" subtitle="Building the modern replacement for legacy mortgage technology." breadcrumb={{ label: 'About', href: '/about' }} />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">Why This Exists</h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                I started building Adamas LOS because I saw the problem firsthand. Working alongside a mortgage lender who was paying for
                both Encompass and BytePro &mdash; because neither did what they needed &mdash; I watched employees waste hours on manual
                data entry, document review, and compliance checks on platforms that look and operate like relics from the 1990s.
              </p>
              <p>
                Both Encompass and BytePro are now owned by ICE Mortgage Technology, which controls an estimated 40-50% of the LOS market.
                With near-monopoly control, there&apos;s no incentive to innovate. BytePro uses a single &ldquo;God entity&rdquo; data model,
                and Encompass runs on 20-year-old architecture. Meaningful AI integration isn&apos;t possible without a ground-up rebuild.
              </p>
              <p>
                So that&apos;s what I built. Adamas LOS is designed from scratch with AI at the core &mdash; not bolted on as an afterthought.
                The same AI leverage that built this platform is what allows it to automate mortgage processing for lenders. Document-heavy,
                rule-heavy, compliance-heavy workflows are exactly where AI delivers the most value, and legacy platforms simply can&apos;t support it.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Principles</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="text-center p-6">
                  <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{v.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Leadership</h2>
          </FadeIn>
          <div className="flex justify-center">
            {team.map((m) => (
              <FadeIn key={m.name}>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-3 text-lg font-bold text-slate-600">
                    {m.initials}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">{m.name}</h3>
                  <p className="text-xs text-slate-500">{m.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
