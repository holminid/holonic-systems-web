/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        holon: {
          yellow: "#f4f694",
          magenta: "#cf2bf3",
          darkblue: "#2e3139",
          lightorange: "#9a877e",
          graypink: "#E6DEDA"
        }
      },
      fontFamily: {
        sans: ['Raleway', 'system-ui', 'Segoe UI', 'Roboto', 'Inter', 'Arial', 'sans-serif'],
        serif: ['Raleway', 'ui-serif', 'Georgia', 'Times New Roman', 'serif']
      }
    }
  },
  plugins: []
};
