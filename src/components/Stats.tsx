'use client'

import { GradientMesh } from './GradientMesh'
import { AnimatedCounter } from './AnimatedCounter'
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn'

const stats = [
  { value: 166, suffix: 'K+', label: 'Lines of production code' },
  { value: 168, suffix: '', label: 'Database tables per tenant' },
  { value: 30, suffix: '+', label: 'Backend modules' },
  { value: 12700, suffix: '+', label: 'Automated tests' },
]

export function Stats() {
  return (
    <section className="relative py-24 bg-navy-950 overflow-hidden">
      <GradientMesh />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built for Enterprise Scale</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">A complete platform engineered from the ground up &mdash; not a prototype, not an MVP.</p>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} decimals={0} className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent" />
              </div>
              <p className="text-sm md:text-base text-slate-400">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
