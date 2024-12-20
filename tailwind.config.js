/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all your components for Tailwind classes
    "./components/**/*.{js,jsx}", // Add this if you store components in a separate folder
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroBg': 'url("../public/shop_hero.jpeg")',
      },
      screens: {
        xxs: '320px',
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      // Add colors for Shadcn-style components or custom themes
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        mainbackground: '#307268',
        primarytext: '#ffffff',
        secondaryBg: '#EAF1F0',
        gradientOne: '#OE221F',
        customGreenOpaque: 'rgba(0, 0, 0, 0.7)',
        customgreen: 'rgba(14, 34, 31, 1)',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      // Extend font families for additional styling flexibility
      fontFamily: {
        sana: ["monospace", "Arial", "sans-serif"],
        integral_bold: ["integralBold", "sans-serif"],
        inter: ["Inter", "sans-serif"], // Popular, clean font for modern UIs
      },

      // Extend spacing for consistent layouts
      spacing: {
        18: "4.5rem", // Custom spacing value, e.g., between sections
        108: "27rem", // For large components
      },

      // Add custom keyframes and animations for hover effects or loaders
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
      },
    },
  },
  plugins: [
    // require("@tailwindcss/forms"), // For styling forms more easily
    // require("@tailwindcss/typography"), // Adds better typography utilities
    // require("@tailwindcss/aspect-ratio"), // Handles aspect ratios for images and videos
  ],
};


