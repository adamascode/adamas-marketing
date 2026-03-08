'use client'

import { GradientMesh } from './GradientMesh'
import { FadeIn } from './FadeIn'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="relative py-24 bg-navy-950 overflow-hidden">
      <GradientMesh />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Replace Your Legacy LOS?</h2>
          <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">See how Adamas LOS automates document processing, compliance, and underwriting with AI built in from day one.</p>
          <Link href="/contact" className="inline-flex items-center px-8 py-3.5 text-base font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/25 hover:shadow-emerald-500/40">
            Request a Demo
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
