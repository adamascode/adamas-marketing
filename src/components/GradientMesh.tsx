'use client'

export function GradientMesh({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-navy-700/25 blur-[120px] animate-mesh-drift-1" />
      <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-teal-600/12 blur-[120px] animate-mesh-drift-2" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-cyan-500/8 blur-[100px] animate-mesh-drift-3" />
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}
