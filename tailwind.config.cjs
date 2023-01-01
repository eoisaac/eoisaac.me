/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Ubuntu', 'sans-serif'],
      mono: ['Fira Code', 'monospace'],
    },
    extend: {
      colors: {
        'b-dark': 'rgb(var(--base-dark) / <alpha-value>)',
        'b-900': 'rgb(var(--base-900) / <alpha-value>)',
        'b-800': 'rgb(var(--base-800) / <alpha-value>)',
        'b-700': 'rgb(var(--base-700) / <alpha-value>)',
        'b-600': 'rgb(var(--base-600) / <alpha-value>)',
        'b-500': 'rgb(var(--base-500) / <alpha-value>)',
        'b-400': 'rgb(var(--base-400) / <alpha-value>)',
        'b-300': 'rgb(var(--base-300) / <alpha-value>)',
        'b-200': 'rgb(var(--base-200) / <alpha-value>)',
        'b-100': 'rgb(var(--base-100) / <alpha-value>)',
        'b-50': 'rgb(var(--base-50) / <alpha-value>)',
        'b-light': 'rgb(var(--base-light) / <alpha-value>)',

        'm-900': 'rgb(var(--main-900) / <alpha-value>)',
        'm-800': 'rgb(var(--main-800) / <alpha-value>)',
        'm-700': 'rgb(var(--main-700) / <alpha-value>)',
        'm-600': 'rgb(var(--main-600) / <alpha-value>)',
        'm-500': 'rgb(var(--main-500) / <alpha-value>)',
        'm-400': 'rgb(var(--main-400) / <alpha-value>)',
        'm-300': 'rgb(var(--main-300) / <alpha-value>)',
        'm-200': 'rgb(var(--main-200) / <alpha-value>)',
        'm-100': 'rgb(var(--main-100) / <alpha-value>)',
        'm-50': 'rgb(var(--main-50) / <alpha-value>)',

        's-700': 'rgb(var(--success-700) / <alpha-value>)',
        's-500': 'rgb(var(--success-500) / <alpha-value>)',
        's-300': 'rgb(var(--success-300) / <alpha-value>)',

        'w-600': 'rgb(var(--warning-600) / <alpha-value>)',
        'w-400': 'rgb(var(--warning-400) / <alpha-value>)',
        'w-300': 'rgb(var(--warning-300) / <alpha-value>)',

        'd-700': 'rgb(var(--danger-700) / <alpha-value>)',
        'd-500': 'rgb(var(--danger-500) / <alpha-value>)',
        'd-300': 'rgb(var(--danger-300) / <alpha-value>)',

        transparent: 'var(--transparent)',
      },
    },
  },
  plugins: [],
}
