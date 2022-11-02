/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Ubuntu', 'sans-serif'],
      mono: ['Fira Code', 'monospace'],
    },
    extend: {
      colors: {
        'title-primary': 'rgb(var(--title-primary) / <alpha-value>)',
        'text-primary': 'rgb(var(--text-primary) / <alpha-value>)',
        'text-accent': 'rgb(var(--text-accent) / <alpha-value>)',

        'base-lines': 'rgb(var(--base-lines) / <alpha-value>)',

        'gradient-blue': 'rgb(var(--gradient-blue) / <alpha-value>)',
        'gradient-green': 'rgb(var(--gradient-green) / <alpha-value>)',

        'auxiliary-blue': 'rgb(var(--auxiliary-blue) / <alpha-value>)',
        'auxiliary-green': 'rgb(var(--auxiliary-green) / <alpha-value>)',

        'accent-orange': 'rgb(var(--accent-orange) / <alpha-value>)',
        'accent-green': 'rgb(var(--accent-green) / <alpha-value>)',
        'accent-red': 'rgb(var(--accent-red) / <alpha-value>)',
        'accent-violet': 'rgb(var(--accent-violet) / <alpha-value>)',

        'shape-primary': 'rgb(var(--shape-primary) / <alpha-value>)',
        'shape-secondary': 'rgb(var(--shape-secondary) / <alpha-value>)',
        'base-background': 'rgb(var(--base-background) / <alpha-value>)',
      },
      backgroundImage: {},
    },
  },
  plugins: [],
}
