/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables class-based dark mode
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust paths to match your project
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#F9FAFB",
          dark: "#1E1E1E",
        },
        surface: {
          light: "#FFFFFF",
          dark: "#2A2A2A",
        },
        primary: {
          light: "#2563EB",
          dark: "#3B82F6",
        },
        primaryHover: {
          light: "#1D4ED8",
          dark: "#60A5FA",
        },
        textPrimary: {
          light: "#111827",
          dark: "#F3F4F6",
        },
        textSecondary: {
          light: "#6B7280",
          dark: "#9CA3AF",
        },
        borderColor: {
          light: "#E5E7EB",
          dark: "#3F3F46",
        },
        accent: {
          light: "#10B981",
          dark: "#34D399",
        },
        danger: {
          light: "#EF4444",
          dark: "#F87171",
        },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 2px 12px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [],
};
