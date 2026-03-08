'use client'

import { PageHero } from '@/components/PageHero'
import { CTASection } from '@/components/CTASection'
import { FadeIn } from '@/components/FadeIn'
import { Check } from 'lucide-react'
import Link from 'next/link'

const tiers = [
  {
    name: 'Starter',
    price: '$2,500',
    period: '/month',
    description: 'For small lenders getting started with modern LOS.',
    features: ['Up to 50 loans/month', 'AI document processing', 'Basic pipeline management', 'Borrower portal', 'Email support', '1 admin user'],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Professional',
    price: '$7,500',
    period: '/month',
    description: 'For growing lenders who need full automation.',
    features: ['Up to 300 loans/month', 'Everything in Starter', 'Automated underwriting', 'Broker portal', 'Compliance engine', 'Custom workflows', 'API access', 'Priority support', 'Up to 25 users'],
    cta: 'Request Demo',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large lenders and banks with custom needs.',
    features: ['Unlimited loans', 'Everything in Professional', 'AI Copilot', 'Custom integrations', 'Dedicated success manager', 'SLA guarantees', 'On-premise option', 'Unlimited users'],
    cta: 'Contact Sales',
    featured: false,
  },
]

export default function PricingPage() {
  return (
    <>
      <PageHero title="Simple, Transparent Pricing" subtitle="Choose the plan that fits your lending operation. All plans include a 30-day free trial." breadcrumb={{ label: 'Pricing', href: '/pricing' }} />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <div className="mt-4 mb-2">
                    <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                    {tier.period && <span className="text-slate-500">{tier.period}</span>}
                  </div>
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
        </div>
      </section>

      <CTASection />
    </>
  )
}
