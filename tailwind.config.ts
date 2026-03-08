import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      animation: {
        'mesh-drift-1': 'meshDrift1 20s ease-in-out infinite alternate',
        'mesh-drift-2': 'meshDrift2 25s ease-in-out infinite alternate',
        'mesh-drift-3': 'meshDrift3 18s ease-in-out infinite alternate',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        meshDrift1: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(80px, 40px) scale(1.1)' },
        },
        meshDrift2: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(-60px, 60px) scale(1.05)' },
        },
        meshDrift3: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(40px, -50px) scale(1.15)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
