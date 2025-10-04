import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design System (novo) + compat
        primary: {
          DEFAULT: "#0D3B66",   // Navy Blue (DEFAULT)
          light: "#3D5A80",     // Steel Blue (light)
          // Compatibilidade com tokens antigos
          dark: "#0D3B66",      // Azul Marinho Profundo
          blue: "#3D5A80",      // Azul Claro / Aço
          gray: "#5C5C5C",      // Cinza Técnico
          gold: "#F4D35E",      // Dourado Claro
          yellow: "#F4D35E",    // Alias para amarelo (compat)
          green: "#1FAB89",     // Verde Profissional
          soft: "#2A4A6B",      // Azul Suave Meio Escuro
        },
        accent: {
          red: "#D72638",       // CTA buttons
          gold: "#F4D35E",      // Premium touch
          green: "#1FAB89",     // Success feedback
        },
        neutral: {
          white: "#FFFFFF",     // Branco Limpo
          light: "#F7F7F7",     // Cinza Neutro Claro
          dark: "#2A4A6B",      // Mantém azul suave (compat)
          trueDark: "#1A1A1A",  // Preto suave (especificação nova)
          gray: "#5C5C5C",      // Cinza técnico
        },
        white: "#FFFFFF",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
