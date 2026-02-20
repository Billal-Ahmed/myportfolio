"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check local storage for saved language
    const savedLang = localStorage.getItem("app-lang");
    if (savedLang && translations[savedLang]) {
      setLanguage(savedLang);
    }
    setMounted(true);
  }, []);

  const changeLanguage = (langCode) => {
    if (translations[langCode]) {
      setLanguage(langCode);
      localStorage.setItem("app-lang", langCode);
    }
  };

  // Helper to get nested translation values: "hero.greeting"
  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];
    for (let k of keys) {
      if (value === undefined) return key;
      value = value[k];
    }
    return value || key;
  };

  // Define languages list
  const languages = [
    { code: "en", name: "English", dir: "ltr" },
    { code: "ur", name: "Urdu", dir: "rtl" },
    { code: "ar", name: "Arabic", dir: "rtl" },
    { code: "de", name: "German", dir: "ltr" },
    { code: "fr", name: "French", dir: "ltr" },
    { code: "zh", name: "Chinese", dir: "ltr" },
  ];

  const currentLangObj = languages.find((l) => l.code === language);
  const dir = currentLangObj?.dir || "ltr";

  // Prevent hydration mismatch while keeping the provider available
  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, languages, dir }}>
      <div dir={dir} style={!mounted ? { visibility: "hidden" } : {}}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
