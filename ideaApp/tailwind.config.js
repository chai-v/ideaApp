/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #8726E7, #B880E0, #E9D9D9, #E9D9D9)',
      },
    },
    colors: {
      'cream': '#FFF7F7',
      'darkcream': '#EDE3E3',
      'purple': '#8727E7',
      'darkpurple': '#461D6F',
      'new': '#6D33A6'
    },
    animation: {
      typewriter: "typewriter 2s steps(11) forwards"
    },
    keyframes: {
      typewriter: {
        to: {
          left: "100%"
        }
      }
    }
  },
  plugins: [],
}