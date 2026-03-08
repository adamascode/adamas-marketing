'use client'

import { GradientMesh } from './GradientMesh'
import { FadeIn } from './FadeIn'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      <GradientMesh />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Lending?</h2>
          <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">Join the lenders who are already closing loans faster with AI.</p>
          <Link href="/contact" className="inline-flex items-center px-8 py-3.5 text-base font-medium text-white bg-gradient-to-r from-blue-500 to-violet-500 rounded-md hover:from-blue-600 hover:to-violet-600 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
            Request a Demo
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
