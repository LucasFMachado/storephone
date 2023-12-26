import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'contact-image': "url('/images/contact.jpg')",
      },
      colors: {
        'bright-color': '#3D30A2',
        'background-color': '#7071E8',
      },
    },
  },
  plugins: [],
}
export default config
