/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Specify the files where Tailwind should look for CSS classes (unused styles will be purged)
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
