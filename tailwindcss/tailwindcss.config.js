/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],

  corePlugins: {
    // https://tailwindcss.com/docs/preflight preflight is good but it's not perfect for existing projects
    preflight: false
  },

  theme: {
    extend: {
      // change the size to your needs
      fontSize: {
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["18px", "28px"],
        xl: ["20px", "32px"],
        "2xl": ["24px", "36px"],
        "3xl": ["30px", "40px"],
        "4xl": ["36px", "48px"],
        "5xl": ["48px", "56px"],
        "6xl": ["64px", "72px"]
      }
    }
  },

  plugins: []
};
