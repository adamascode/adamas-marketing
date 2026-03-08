'use client'

import { PageHero } from '@/components/PageHero'
import { CTASection } from '@/components/CTASection'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn'
import { FileSearch, Brain, ShieldCheck, Bot, LayoutGrid, Users, Lock, Globe, BarChart3, FileText, Workflow, Zap } from 'lucide-react'

const aiFeatures = [
  { icon: FileSearch, title: 'Intelligent Document Processing', description: 'Auto-classify and extract data from 50+ document types. OCR, ML classification, and structured extraction in seconds.' },
  { icon: Brain, title: 'Automated Underwriting', description: 'ML-powered risk models that analyze credit, income, assets, and property data to deliver consistent underwriting decisions.' },
  { icon: ShieldCheck, title: 'Smart Compliance', description: 'Real-time monitoring for TRID, HMDA, fair lending, and state-specific rules. Automatic adverse action generation.' },
  { icon: Bot, title: 'AI Copilot', description: 'Context-aware AI assistant that helps loan officers with document review, condition clearing, and borrower communication.' },
]

const platformFeatures = [
  { icon: LayoutGrid, title: 'Pipeline Management', description: 'Real-time loan pipeline with advanced filtering, custom views, and live updates.' },
  { icon: Users, title: 'Multi-Tenant Architecture', description: 'Schema-per-tenant isolation with role-based access control and per-tenant encryption.' },
  { icon: Lock, title: 'Enterprise Security', description: 'SOC 2 compliant. AES-256-GCM encryption, audit logging, and PII masking throughout.' },
  { icon: Globe, title: 'Broker & Borrower Portals', description: 'White-labeled portals for brokers and borrowers with real-time status and document upload.' },
  { icon: BarChart3, title: 'Analytics & Reporting', description: 'Production reports, pipeline analytics, commission tracking, and custom report builder.' },
  { icon: FileText, title: 'Document Management', description: 'Full lifecycle management with version control, e-signatures, and automated conditions.' },
  { icon: Workflow, title: 'Workflow Engine', description: 'Visual workflow builder for loan processes, approvals, and automated task assignment.' },
  { icon: Zap, title: 'Integrations', description: 'Credit bureaus, AUS (DU/LP), pricing engines, appraisal, flood, MI, and more.' },
]

export default function FeaturesPage() {
  return (
    <>
      <PageHero title="Platform Features" subtitle="Everything you need to originate, process, and close loans — powered by AI." breadcrumb={{ label: 'Features', href: '/features' }} />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">AI-Powered Intelligence</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Four AI systems working together to automate the most time-consuming parts of loan origination.</p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiFeatures.map((f) => (
              <StaggerItem key={f.title}>
                <div className="p-6 rounded-lg border border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center mb-4">
                    <f.icon className="h-5 w-5 text-blue-600" />
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
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Every tool a modern lender needs, in one integrated platform.</p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformFeatures.map((f) => (
              <StaggerItem key={f.title}>
                <div className="p-6 rounded-lg border border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center mb-4">
                    <f.icon className="h-5 w-5 text-blue-600" />
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
