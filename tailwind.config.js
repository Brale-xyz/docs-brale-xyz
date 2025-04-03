// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}", // Include markdown files
    "./docs/**/*.{js,jsx,ts,tsx,md,mdx}", // Adjust based on your structure
  ],
  // Important: This ensures Tailwind doesn't interfere with Docusaurus styles
  important: true,
  // Prevent Tailwind from resetting base styles
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      // You can extend Docusaurus's theme variables here
      colors: {
        primary: "var(--ifm-color-primary)",
        "primary-dark": "var(--ifm-color-primary-dark)",
        "primary-darker": "var(--ifm-color-primary-darker)",
        "primary-darkest": "var(--ifm-color-primary-darkest)",
        "primary-light": "var(--ifm-color-primary-light)",
        "primary-lighter": "var(--ifm-color-primary-lighter)",
        "primary-lightest": "var(--ifm-color-primary-lightest)",
      },
    },
  },
  plugins: [],
};
