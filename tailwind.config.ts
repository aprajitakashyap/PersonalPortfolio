import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Our existing design system colors
        "bg-primary": "var(--background-primary)",
        "bg-secondary": "var(--background-secondary)",
        "bg-card": "var(--background-card)",
        "accent-primary": "var(--accent-primary)",
        "accent-secondary": "var(--accent-secondary)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "border-light": "var(--border-light)",
        // shadcn/ui CSS variables (using our design tokens)
        background: "var(--background-primary)",
        foreground: "var(--text-primary)",
        card: {
          DEFAULT: "var(--background-card)",
          foreground: "var(--text-primary)",
        },
        popover: {
          DEFAULT: "var(--background-card)",
          foreground: "var(--text-primary)",
        },
        primary: {
          DEFAULT: "var(--accent-primary)",
          foreground: "var(--text-primary)",
        },
        secondary: {
          DEFAULT: "var(--background-secondary)",
          foreground: "var(--text-primary)",
        },
        muted: {
          DEFAULT: "var(--background-secondary)",
          foreground: "var(--text-muted)",
        },
        accent: {
          DEFAULT: "var(--accent-primary)",
          foreground: "var(--text-primary)",
        },
        border: "var(--border-light)",
        input: "var(--border-light)",
        ring: "var(--accent-primary)",
      },
      fontFamily: {
        geist: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      spacing: {
        "section": "120px",
        "subsection": "64px",
      },
      maxWidth: {
        "container": "1280px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
export default config;
