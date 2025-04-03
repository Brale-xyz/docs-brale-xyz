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
    container: false, // Disable Tailwind's container plugin
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
      // Preserve Docusaurus container widths
      container: {
        center: true,
        padding: "var(--ifm-spacing-horizontal)",
        screens: {
          sm: "var(--ifm-container-width-sm)",
          md: "var(--ifm-container-width-md)",
          lg: "var(--ifm-container-width-lg)",
          xl: "var(--ifm-container-width-xl)",
        },
      },
    },
  },
  plugins: [],
};
