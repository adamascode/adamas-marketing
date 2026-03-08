'use client'

import { Hero } from '@/components/Hero'
import { TrustedBy } from '@/components/TrustedBy'
import { Stats } from '@/components/Stats'
import { Testimonials } from '@/components/Testimonials'
import { CTASection } from '@/components/CTASection'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn'
import { FileSearch, Brain, ShieldCheck, LayoutGrid, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const highlights = [
  { icon: FileSearch, title: 'AI Document Processing', description: 'Classify and extract data from loan documents in seconds with 99% accuracy.' },
  { icon: Brain, title: 'Automated Underwriting', description: 'ML-powered risk assessment that delivers consistent decisions in minutes.' },
  { icon: ShieldCheck, title: 'Smart Compliance', description: 'Real-time regulatory monitoring across TRID, HMDA, and fair lending rules.' },
  { icon: LayoutGrid, title: 'Full Pipeline Management', description: 'Real-time pipeline with advanced filtering, custom views, and SSE updates.' },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Built for Modern Mortgage Lending</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Everything you need to originate, process, and close loans faster.</p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <StaggerItem key={item.title}>
                <div className="group p-6 rounded-lg border border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center mt-10">
            <Link href="/features" className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
              Explore All Features <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      <Stats />
      <Testimonials />
      <CTASection />
    </>
  )
}
