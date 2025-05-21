/** @type {import('tailwindcss').Config} */
module.export = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{html,js}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "/app/**/*.{js,ts,jsx,tsx",
  ],
  darkMode: "class", // Use 'class' for better control of dark mode
  theme: {
    extend: {
      colors: {
        light: {
          background: "#F9FAFB",
          surface: "#FFFFFF",
          primary: "#3B82F6",
          primaryHover: "#2563EB",
          textPrimary: "#111827",
          textSecondary: "#6B7280",
          border: "#E5E7EB",
          accent: "#10B981",
          error: "#EF4444",
          status: {
            applied: "#CBD5E1",
            underReview: "#6366F1",
            interview: "#FBBF24",
            selected: "#10B981",
            rejected: "#EF4444",
          },
        },
        dark: {
          background: "#121212",
          surface: "#1E1E1E",
          primary: "#60A5FA",
          primaryHover: "#3B82F6",
          textPrimary: "#F3F4F6",
          textSecondary: "#9CA3AF",
          border: "#2A2A2A",
          accent: "#34D399",
          error: "#F87171",
          status: {
            applied: "#374151",
            underReview: "#818CF8",
            interview: "#FACC15",
            selected: "#34D399",
            rejected: "#F87171",
          },
        },
      },
      boxShadow: {
        soft: "0 1px 3px rgba(0,0,0,0.05)",
        medium: "0 4px 6px rgba(0,0,0,0.1)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
