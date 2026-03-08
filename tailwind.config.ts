import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2f9',
          100: '#d5dff0',
          200: '#afc2e3',
          300: '#7d9bd1',
          400: '#4e74b8',
          500: '#2d5399',
          600: '#1e3f7a',
          700: '#163063',
          800: '#0F2B5B',
          900: '#0a1f42',
          950: '#06132a',
        },
      },
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
