/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Elevated brand ramp (indigo-forward, with a violet/cyan accent system)
        brand: {
          50: '#eef1ff',
          100: '#e0e5ff',
          200: '#c7d0ff',
          300: '#a3b0ff',
          400: '#7c84fc',
          500: '#5d5ef5',
          600: '#4a3fe0',
          700: '#3e31c4',
          800: '#342a9e',
          900: '#2e297d',
          950: '#1c1849',
        },
        accent: {
          cyan: '#22d3ee',
          violet: '#a855f7',
          pink: '#f472b6',
        },
        ink: {
          DEFAULT: '#0b0f1f',
          soft: '#1a2036',
        },
      },
      boxShadow: {
        glass: '0 8px 32px -8px rgba(31, 24, 73, 0.28), inset 0 1px 0 0 rgba(255,255,255,0.55)',
        'glass-lg': '0 24px 64px -12px rgba(31, 24, 73, 0.35), inset 0 1px 0 0 rgba(255,255,255,0.5)',
        glow: '0 0 0 1px rgba(93,94,245,0.25), 0 12px 40px -8px rgba(93,94,245,0.5)',
        'glow-sm': '0 6px 24px -6px rgba(93,94,245,0.45)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #5d5ef5 0%, #a855f7 50%, #22d3ee 100%)',
        'brand-radial': 'radial-gradient(circle at 30% 20%, rgba(93,94,245,0.18), transparent 60%)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)', opacity: '0.6' },
          '33%': { transform: 'translate3d(4%, -6%, 0) scale(1.15)', opacity: '0.85' },
          '66%': { transform: 'translate3d(-5%, 4%, 0) scale(0.95)', opacity: '0.7' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(93,94,245,0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(93,94,245,0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out both',
        'fade-in-up': 'fade-in-up 0.6s cubic-bezier(0.22,1,0.36,1) both',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        aurora: 'aurora 18s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        'glow-pulse': 'glow-pulse 2.5s ease-out infinite',
      },
    },
  },
  plugins: [],
}
