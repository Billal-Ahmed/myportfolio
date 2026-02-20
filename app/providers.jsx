"use client";

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "./context/LanguageContext";

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}
