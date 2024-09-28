/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your file structure
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: `url('/Bookis/src/assets/images/hero_bg.jpg')`,
        // Path to your hero image
      },
      colors: {
        primary: "#f9fafb", // Light background color (off-white)
        accent: "#ff5722", // Bright accent color (similar to the orange in the button)
        linkHover: "#ff7849", // Slightly lighter orange for hover effects
        text: "#1a202c", // Dark text color (almost black)
        secondaryText: "#6b7280", // Gray text for subheadings
        buttonText: "#ffffff", // White for button text
        highlight: "#007bff", // Blue for highlight text (similar to Bookio)
        background: "#ffffff", // White background for hero section
        shadow: "#e5e7eb", // Light shadow color for images
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"], // Modern font for headings
        body: ["Roboto", "sans-serif"], // Clean font for body text
      },
      fontSize: {
        "6xl": "4rem", // 64px for large headings
        "5xl": "3rem", // 48px for medium headings
        "3xl": "2rem", // 32px for smaller headings
        xl: "1.25rem", // 20px for body text
        lg: "1.125rem", // 18px for subtext
      },
      boxShadow: {
        book: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for book images
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your file structure
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/original-44c397fd26b4819513d79269128a3711.png')", // Path to your hero image
      },
      colors: {
        primary: "#f9fafb", // Light background color (off-white)
        accent: "#ff5722", // Bright accent color (similar to the orange in the button)
        linkHover: "#ff7849", // Slightly lighter orange for hover effects
        text: "#1a202c", // Dark text color (almost black)
        secondaryText: "#6b7280", // Gray text for subheadings
        buttonText: "#ffffff", // White for button text
        highlight: "#007bff", // Blue for highlight text (similar to Bookio)
        background: "#ffffff", // White background for hero section
        shadow: "#e5e7eb", // Light shadow color for images
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"], // Modern font for headings
        body: ["Roboto", "sans-serif"], // Clean font for body text
      },
      fontSize: {
        "6xl": "4rem", // 64px for large headings
        "5xl": "3rem", // 48px for medium headings
        "3xl": "2rem", // 32px for smaller headings
        xl: "1.25rem", // 20px for body text
        lg: "1.125rem", // 18px for subtext
      },
      boxShadow: {
        book: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for book images
      },
    },
  },
  plugins: [],
};
