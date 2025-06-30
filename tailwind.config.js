// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,md,mdx}', // Include markdown files
    './docs/**/*.{js,jsx,ts,tsx,md,mdx}', // Adjust based on your structure
  ],
  // Important: This ensures Tailwind doesn't interfere with Docusaurus styles
  important: true,
  // Enable dark mode using data-theme attribute
  darkMode: ['class', '[data-theme="dark"]'],
  // Prevent Tailwind from resetting base styles
  corePlugins: {
    preflight: false,
    container: false, // Disable Tailwind's container plugin
  },
  theme: {
    extend: {
      // You can extend Docusaurus's theme variables here
      colors: {
        primary: 'var(--ifm-color-primary)',
        'primary-dark': 'var(--ifm-color-primary-dark)',
        'primary-darker': 'var(--ifm-color-primary-darker)',
        'primary-darkest': 'var(--ifm-color-primary-darkest)',
        'primary-light': 'var(--ifm-color-primary-light)',
        'primary-lighter': 'var(--ifm-color-primary-lighter)',
        'primary-lightest': 'var(--ifm-color-primary-lightest)',
        green: {
          50: '#ECFDF3',
          100: '#D3F8DF',
          300: '#73E2A3',
          500: '#12B76A',
          700: '#087443',
        },
        gray: {
          100: '#F2F4F7',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667085',
          600: '#5C5C5C',
          700: '#424242',
          800: '#292929',
          900: '#18181B',
        },
        purple: {
          50: '#f4f3ff',
          100: '#ebe9fe',
          200: '#d9d6fe',
          300: '#bdb4fe',
          400: '#9b8afb',
          500: '#7a5af8',
          600: '#6938ef',
          700: '#5925dc',
          800: '#4a1fb8',
          900: '#3e1c96',
        },
        red: {
          50: '#FEF3F2',
          100: '#FEE4E2',
          300: '#FDA29B',
          400: '#F97066',
          500: '#F04438',
          600: '#D92D20',
          700: '#B42318',
        },
      },
      // Preserve Docusaurus container widths
      container: {
        center: true,
        padding: 'var(--ifm-spacing-horizontal)',
        screens: {
          sm: 'var(--ifm-container-width-sm)',
          md: 'var(--ifm-container-width-md)',
          lg: 'var(--ifm-container-width-lg)',
          xl: 'var(--ifm-container-width-xl)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/nesting')],
};
