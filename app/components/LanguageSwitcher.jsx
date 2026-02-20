"use client";

import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, changeLanguage, languages } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => changeLanguage(e.target.value)}
      className="language-switcher"
      aria-label="Select Language"
      style={{
        background: "var(--bg-card)",
        color: "var(--text-primary)",
        border: "1px solid var(--border-color)",
        padding: "4px 8px",
        borderRadius: "var(--radius-sm)",
        fontSize: "14px",
        cursor: "pointer",
        outline: "none",
        fontFamily: "var(--font-primary)"
      }}
    >
      {languages.map((l) => (
        <option key={l.code} value={l.code}>
          {l.name}
        </option>
      ))}
    </select>
  );
}
