'use client'

import { Hero } from '@/components/Hero'
import { Stats } from '@/components/Stats'
import { CTASection } from '@/components/CTASection'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn'
import { FileSearch, Brain, ShieldCheck, LayoutGrid, ArrowRight, AlertTriangle, Clock, DollarSign, Lock } from 'lucide-react'
import Link from 'next/link'

const highlights = [
  { icon: FileSearch, title: 'AI Document Engine', description: 'Automatic classification, OCR, and data extraction from pay stubs, tax returns, and 50+ document types. Eliminates the #1 time sink in mortgage processing.' },
  { icon: Brain, title: 'AI Copilot', description: 'Context-aware assistant that flags missing conditions, answers guideline questions, creates workflows, and suggests next steps based on the loan state.' },
  { icon: ShieldCheck, title: 'Full Compliance Automation', description: 'Built-in TRID deadline tracking, HMDA validation, adverse action generation, and state-specific rule enforcement woven into every workflow.' },
  { icon: LayoutGrid, title: 'No-Code Configurability', description: 'Drag-and-drop page builder, custom fields, and workflow automation. Adapt the system to your processes without developer help.' },
]

const problems = [
  { icon: Clock, title: 'Hours of Manual Data Entry', description: 'Employees manually type information from documents into loan fields, toggling between screens that look like they were built in the 1990s.' },
  { icon: DollarSign, title: 'Expensive Legacy Systems', description: 'Lenders pay for platforms like Encompass and BytePro that cost $100K+ to deploy and take 3-6 months to implement.' },
  { icon: Lock, title: 'Architecturally Stuck', description: 'BytePro uses a single "God entity" and Encompass runs on 20-year-old architecture. Meaningful AI integration is impossible without a ground-up rebuild.' },
  { icon: AlertTriangle, title: 'Compliance Is Bolted On', description: 'Legacy systems treat compliance as an afterthought. TRID deadlines, HMDA reporting, and fair lending rules are manual checklists instead of automated guardrails.' },
]

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* The Problem */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Industry Is Stuck</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Mortgage lenders are trapped on legacy platforms owned by a single company with no incentive to innovate. Both Encompass and BytePro are owned by ICE.</p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((item) => (
              <StaggerItem key={item.title}>
                <div className="p-6 rounded-lg border border-slate-200 bg-white h-full">
                  <div className="w-10 h-10 rounded-md bg-red-50 flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5 text-red-500" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Built with AI at the Core</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Not AI bolted on. Every data model and workflow was designed assuming AI would read, write, and reason about the data from day one.</p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item) => (
              <StaggerItem key={item.title}>
                <div className="group p-6 rounded-lg border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-10 h-10 rounded-md bg-emerald-50 flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center mt-10">
            <Link href="/features" className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors">
              Explore All Features <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Full Lifecycle */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Entire Loan Lifecycle</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">One platform from application to closing and secondary market delivery.</p>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-3">
              {['Application Intake', 'Processing', 'Underwriting', 'Pricing & Lock', 'Compliance', 'Closing', 'Funding', 'Secondary Market'].map((stage) => (
                <div key={stage} className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700 shadow-sm">
                  {stage}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <Stats />
      <CTASection />
    </>
  )
}
