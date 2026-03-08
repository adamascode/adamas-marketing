'use client'

import { GradientMesh } from './GradientMesh'
import { AnimatedCounter } from './AnimatedCounter'
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn'

const stats = [
  { value: 85, suffix: '%', label: 'Faster document processing' },
  { value: 99.2, suffix: '%', decimals: 1, label: 'Data extraction accuracy' },
  { value: 3, suffix: 'x', label: 'Faster loan closings' },
  { value: 60, suffix: '%', label: 'Reduction in manual tasks' },
]

export function Stats() {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      <GradientMesh />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Results That Speak for Themselves</h2>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent" />
              </div>
              <p className="text-sm md:text-base text-slate-400">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
