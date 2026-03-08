'use client'

import { PageHero } from '@/components/PageHero'
import { CTASection } from '@/components/CTASection'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn'
import { FileSearch, Brain, ShieldCheck, Bot, LayoutGrid, Users, Lock, Globe, BarChart3, FileText, Workflow, Zap } from 'lucide-react'

const aiFeatures = [
  { icon: FileSearch, title: 'AI Document Engine', description: 'Auto-classify and extract data from 50+ document types including pay stubs, tax returns, and bank statements. OCR, ML classification, and structured extraction that populates loan fields directly &mdash; eliminating the #1 time sink in mortgage processing.' },
  { icon: Brain, title: 'Automated Underwriting & Processing', description: 'AI-powered automation of underwriting decisions and loan condition processing. Trainable on lender-specific programs and guidelines for consistent, auditable decisions.' },
  { icon: ShieldCheck, title: 'Full Compliance Automation', description: 'Built-in TRID deadline tracking, HMDA validation, adverse action notice generation, and state-specific rule enforcement. Compliance is woven into every workflow, not bolted on after the fact.' },
  { icon: Bot, title: 'AI Copilot', description: 'Context-aware assistant available 24/7 that flags missing conditions, answers guideline questions, creates workflows, and suggests next steps based on the loan&apos;s current state. Improves efficiency and reduces costs for every team member.' },
]

const platformFeatures = [
  { icon: LayoutGrid, title: 'Pipeline Management', description: 'Real-time loan pipeline with advanced filtering, custom views, and live updates via server-sent events.' },
  { icon: Users, title: 'Multi-Tenant Architecture', description: 'Schema-per-tenant isolation with role-based access control, row-level security, and per-tenant AES-256-GCM encryption.' },
  { icon: Lock, title: 'Enterprise Security', description: 'PII encryption at rest, comprehensive audit logging, PII masking in logs, and 65 granular permission keys.' },
  { icon: Globe, title: 'Broker & Borrower Portals', description: 'White-labeled portals for brokers to submit and manage loans and for borrowers to apply, upload documents, and track status.' },
  { icon: BarChart3, title: 'Analytics & Reporting', description: 'Production reports, pipeline analytics, commission tracking, and a custom report builder for operational insight.' },
  { icon: FileText, title: 'Document Management', description: 'Full lifecycle management with version control, automated condition tracking, and presigned S3 downloads.' },
  { icon: Workflow, title: 'No-Code Builder', description: 'Drag-and-drop page builder, custom fields, workflow automation, and a component marketplace. Adapt the system without developer help.' },
  { icon: Zap, title: 'Integrations', description: 'Credit bureaus, AUS (DU/LP), pricing engines, appraisal, flood, MI, VOE/VOI, tax transcripts, and fraud detection.' },
]

export default function FeaturesPage() {
  return (
    <>
      <PageHero title="Platform Features" subtitle="The entire loan lifecycle from application to closing &mdash; powered by AI that was designed in, not bolted on." breadcrumb={{ label: 'Features', href: '/features' }} />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">AI-Powered Intelligence</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Four AI systems working together to automate the most time-consuming parts of loan origination.</p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiFeatures.map((f) => (
              <StaggerItem key={f.title}>
                <div className="p-6 rounded-lg border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-md bg-emerald-50 flex items-center justify-center mb-4">
                    <f.icon className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Complete Platform</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Every tool a modern lender needs, in one integrated platform. No more toggling between systems.</p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformFeatures.map((f) => (
              <StaggerItem key={f.title}>
                <div className="p-6 rounded-lg border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-md bg-emerald-50 flex items-center justify-center mb-4">
                    <f.icon className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  )
}
