/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-dm-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      colors: {
        paper: {
          DEFAULT: '#f4f1ea',
          100: '#faf8f2',
          200: '#efeadf',
          300: '#e5dfd1',
        },
        ink: {
          DEFAULT: '#16140f',
          soft: '#6c685e',
          faint: '#9b958a',
        },
        accent: {
          DEFAULT: '#2b3aff',
          ink: '#1d29c9',
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        'spin-slow': 'spin 26s linear infinite',
        float: 'float 7s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
};
