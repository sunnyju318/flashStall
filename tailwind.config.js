/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Tailwind가 CSS 클래스를 찾을 파일들 지정 (사용하지 않는 CSS 자동 제거용)
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

