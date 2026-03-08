'use client'

import { Quote } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn'

const testimonials = [
  { quote: "Adamas cut our average closing time from 42 days to 14. Our loan officers can't imagine going back to the old system.", name: 'Sarah Mitchell', title: 'VP of Operations', company: 'Pacific Home Lending', initials: 'SM' },
  { quote: 'The AI document processing alone saved us 200+ hours per month. The compliance engine gives our underwriters confidence they never had before.', name: 'David Chen', title: 'Chief Technology Officer', company: 'Summit Financial Group', initials: 'DC' },
  { quote: "We evaluated seven LOS platforms. Adamas was the only one built for how mortgage lending actually works today — not ten years ago.", name: 'Maria Rodriguez', title: 'CEO', company: 'Horizon Mortgage Corp', initials: 'MR' },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Lenders Are Saying</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Don&apos;t take our word for it — hear from the lenders transforming their operations with Adamas.</p>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="h-full bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <Quote className="h-8 w-8 text-blue-200 mb-4" />
                <blockquote className="text-slate-700 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-600">{t.initials}</div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.title}, {t.company}</div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
