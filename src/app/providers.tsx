// app/providers.tsx
"use client";

import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "light", // cambia a "dark" si prefieres
    primary: { main: "#2563eb" }, // azul tailwind 600 aprox.
    secondary: { main: "#10b981" }, // emerald 500 aprox.
  },
  shape: { borderRadius: 12 },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline después de Tailwind para que sus normalizaciones no rompan MUI */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
