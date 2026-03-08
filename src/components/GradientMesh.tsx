'use client'

export function GradientMesh({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-blue-500/20 blur-[120px] animate-mesh-drift-1" />
      <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-violet-500/15 blur-[120px] animate-mesh-drift-2" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[100px] animate-mesh-drift-3" />
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
