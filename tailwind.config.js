/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        }
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "fade-in-down": "fadeInDown 1s ease-out forwards"
      }
    }
  },
  plugins: []
}
