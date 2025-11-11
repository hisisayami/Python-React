/** @type {import('tailwindcss').Config} */
module.exports = {
  // scan all of your JS/TS(X) and HTML for class names
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {
      // add your customizations here
    },
  },
  plugins: [
    // e.g. require('@tailwindcss/forms'),
  ],
}
