/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        spaceB: {
          50: "#202033",
          100: "#14152B",
          500: "#4E57FF",
          700: "#373850",
          900: "#080817",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient( circle farthest-corner at 50% 50%, rgba(54, 54, 54) 0%, rgba(33, 33, 33) 90% )',
       
       
        'dark-gradient-radial': 'radial-gradient( circle farthest-corner at 50% 50%, rgba(33, 33, 33) 0%, rgba(51, 51, 51) 90% )',

        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
