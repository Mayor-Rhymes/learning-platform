/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
        listStyleImage: {
          checkmark: 'url("/src/assets/checkmark2.png")',
        },
        backgroundImage: {
           groupbg: 'url("/src/assets/group-photo.jpg")',
        }
      
      
    },
  },
  plugins: [],
}