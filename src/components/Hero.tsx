'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { GradientMesh } from './GradientMesh'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy-950 overflow-hidden">
      <GradientMesh />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm mb-8">
          <Sparkles className="h-4 w-4" />
          AI-Native from Day One
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="text-white">Replace Your</span>
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">Legacy LOS</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Mortgage lenders are stuck on Encompass and BytePro &mdash; platforms that are slow, expensive, and architecturally incapable of real AI. Adamas LOS is the ground-up replacement with AI at the core.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="inline-flex items-center px-8 py-3 text-base font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/25 hover:shadow-emerald-500/40">
            Request a Demo
          </Link>
          <Link href="/features" className="inline-flex items-center px-8 py-3 text-base font-medium text-white border border-slate-600 rounded-md hover:border-slate-400 hover:bg-white/5 transition-all">
            See How It Works
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="mt-16 relative">
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -inset-4 bg-gradient-to-r from-navy-700/30 to-emerald-600/20 rounded-xl blur-2xl" />
            <div className="relative bg-navy-900 border border-navy-700/50 rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-navy-800/50 border-b border-navy-700/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 text-center text-xs text-slate-500">Adamas LOS &mdash; Pipeline Dashboard</div>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { label: 'Active Loans', value: '247' },
                    { label: 'In Processing', value: '89' },
                    { label: 'Approved Today', value: '12' },
                    { label: 'Avg. Close Time', value: '18d' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-navy-800/50 rounded-lg p-3 text-center">
                      <div className="text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {[
                    { name: 'Johnson, M.', amount: '$425,000', status: 'Approved', statusColor: 'bg-emerald-500/20 text-emerald-400' },
                    { name: 'Williams, R.', amount: '$312,500', status: 'Processing', statusColor: 'bg-sky-500/20 text-sky-400' },
                    { name: 'Chen, S.', amount: '$550,000', status: 'Underwriting', statusColor: 'bg-amber-500/20 text-amber-400' },
                  ].map((row) => (
                    <div key={row.name} className="flex items-center justify-between bg-navy-800/30 rounded-lg px-4 py-2.5 text-sm">
                      <span className="text-white font-medium">{row.name}</span>
                      <span className="text-slate-400">{row.amount}</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${row.statusColor}`}>{row.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
