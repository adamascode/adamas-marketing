'use client'

import { PageHero } from '@/components/PageHero'
import { CTASection } from '@/components/CTASection'
import { FadeIn } from '@/components/FadeIn'
import { Check } from 'lucide-react'
import Link from 'next/link'

const tiers = [
  {
    name: 'Starter',
    price: '$25',
    period: '/user/month',
    transaction: '$75/loan originated',
    description: 'For small lenders getting started with modern LOS.',
    features: ['AI document processing', 'Pipeline management', 'Borrower portal', 'Basic compliance engine', 'Email support'],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Professional',
    price: '$50',
    period: '/user/month',
    transaction: '$150/loan originated',
    description: 'For growing lenders who need full automation.',
    features: ['Everything in Starter', 'AI Copilot assistant', 'Automated underwriting', 'Broker portal', 'Full compliance suite (TRID/HMDA)', 'No-code workflow builder', 'Custom fields & page builder', 'API access', 'Priority support'],
    cta: 'Request Demo',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    transaction: 'Volume pricing',
    description: 'For large lenders and banks with custom needs.',
    features: ['Everything in Professional', 'Custom integrations', 'Dedicated success manager', 'SLA guarantees', 'Secondary market delivery', 'Advanced analytics & reporting', 'Unlimited users'],
    cta: 'Contact Sales',
    featured: false,
  },
]

export default function PricingPage() {
  return (
    <>
      <PageHero title="Pricing That Aligns With Your Production" subtitle="Low base fee plus a per-loan transaction fee. You grow, we grow." breadcrumb={{ label: 'Pricing', href: '/pricing' }} />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-slate-600 max-w-2xl mx-auto">Mortgage lenders think in loans, not seats. Our pricing keeps the base low to ease adoption and scales with your volume. No $100K+ deployments. No 6-month implementations.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <FadeIn key={tier.name}>
                <div className={`relative rounded-lg border p-8 h-full flex flex-col ${tier.featured ? 'border-blue-500 ring-1 ring-blue-500 shadow-lg shadow-blue-500/10' : 'border-slate-200'}`}>
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full text-xs font-medium text-white">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
                  <div className="mt-4 mb-1">
                    <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                    {tier.period && <span className="text-slate-500">{tier.period}</span>}
                  </div>
                  <p className="text-sm font-medium text-blue-600 mb-4">+ {tier.transaction}</p>
                  <p className="text-sm text-slate-600 mb-6">{tier.description}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block text-center px-6 py-3 text-sm font-medium rounded-md transition-all ${
                      tier.featured
                        ? 'text-white bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 shadow-lg shadow-blue-500/25'
                        : 'text-slate-700 border border-slate-300 hover:border-slate-400 hover:bg-slate-50'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-16 text-center">
            <div className="max-w-2xl mx-auto bg-slate-50 rounded-lg border border-slate-200 p-6">
              <h3 className="text-base font-semibold text-slate-900 mb-2">Why Per-Loan Pricing?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Legacy LOS deployments cost $100K+ upfront with 3-6 month implementations. Our per-loan model means you start fast with minimal commitment, and your costs scale proportionally to your production. If you originate more, we earn more. Our incentives are aligned.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  )
}
