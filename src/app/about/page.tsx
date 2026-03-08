'use client'

import { PageHero } from '@/components/PageHero'
import { CTASection } from '@/components/CTASection'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn'
import { ShieldCheck, Zap, Users, Target } from 'lucide-react'

const values = [
  { icon: ShieldCheck, title: 'Security First', description: 'Every feature is built with enterprise-grade security, encryption, and compliance from day one.' },
  { icon: Zap, title: 'Speed Without Shortcuts', description: 'We automate the tedious without sacrificing accuracy. Every AI decision is explainable and auditable.' },
  { icon: Users, title: 'Lender-Centric Design', description: 'Built by people who understand mortgage lending. Every feature solves a real operational pain point.' },
  { icon: Target, title: 'Relentless Accuracy', description: '99%+ extraction accuracy. Zero tolerance for data errors. Continuous model improvement.' },
]

const team = [
  { name: 'Joey Pereira', role: 'Founder & CEO', initials: 'JP' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Adamas LOS" subtitle="Building the next generation of mortgage technology." breadcrumb={{ label: 'About', href: '/about' }} />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Mortgage lending hasn&apos;t changed in decades. Loan officers still spend hours on manual data entry,
              document review, and compliance checks. We&apos;re building the AI-powered platform that eliminates
              these bottlenecks — so lenders can focus on what matters: helping people get homes.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="text-center p-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="h-6 w-6 text-blue-600" />
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
