'use client'

const logos = ['Meridian Capital', 'Summit Financial', 'Pacific Lending', 'Atlas Mortgage', 'Vertex Bank', 'Pinnacle Home', 'Horizon Credit', 'Sterling Funds']

function PlaceholderLogo({ name }: { name: string }) {
  const initials = name.split(' ').map((w) => w[0]).join('')
  return (
    <div className="flex items-center gap-2 px-6 text-slate-400/60 select-none whitespace-nowrap">
      <div className="w-8 h-8 rounded bg-slate-300/10 flex items-center justify-center text-xs font-bold">{initials}</div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  )
}

export function TrustedBy() {
  return (
    <section className="bg-slate-50 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-400 uppercase tracking-wider mb-8">Trusted by leading mortgage lenders</p>
      </div>
      <div className="relative">
        <div className="flex animate-marquee">
          {[...logos, ...logos].map((name, i) => (
            <PlaceholderLogo key={`${name}-${i}`} name={name} />
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
