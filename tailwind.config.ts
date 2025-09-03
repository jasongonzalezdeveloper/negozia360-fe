import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: "#2563eb", // Azul Tailwind 600 ~ primary
                    light: "#3b82f6",
                    dark: "#1e40af",
                },
            },
            borderRadius: {
                xl: "1rem",
                "2xl": "1.5rem",
            },
        },
    },
    darkMode: "class", // para activar modo oscuro con la clase 'dark'
    plugins: [],
};

export default config;
