'use client'

import { GradientMesh } from './GradientMesh'
import { FadeIn } from './FadeIn'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumb?: { label: string; href: string }
}

export function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative bg-navy-950 overflow-hidden pt-24 pb-32">
      <GradientMesh />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {breadcrumb && (
          <FadeIn>
            <nav className="flex items-center justify-center gap-2 text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-slate-200">{breadcrumb.label}</span>
            </nav>
          </FadeIn>
        )}
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          {subtitle && <p className="text-lg text-slate-300 max-w-2xl mx-auto">{subtitle}</p>}
        </FadeIn>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-slate-50" />
    </section>
  )
}
