import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bronze: '#C57D08',
        saffron: '#F2C233',
        awhite: '#F5E9D4',
        eblack: '#272216',
        drabbrown: '#302A1A'
      }
    },
  },
  plugins: [],
}
export default config
