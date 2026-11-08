/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        jules: {
          bg: '#150133',
          surface: '#09051c',
          card: '#13092b',
          border: '#3a0c81',
          borderStrong: '#581c87',
          cyan: '#22d3ee',
          fuchsia: '#e879f9',
          purple: '#a855f7',
          amber: '#fbbf24',
        }
      },
      fontFamily: {
        mono: ['"Roboto Mono"', '"IBM Plex Mono"', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['"Roboto Mono"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'pixel-cyan': '4px 4px 0px 0px #0891b2',
        'pixel-purple': '4px 4px 0px 0px #6b21a8',
        'pixel-fuchsia': '4px 4px 0px 0px #be185d',
        'pixel-amber': '4px 4px 0px 0px #b45309',
        'pixel-white': '4px 4px 0px 0px #a855f7',
      }
    },
  },
  plugins: [],
}
