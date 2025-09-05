"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import esMessages from "../messages/es.json";
import enMessages from "../messages/en.json";
import { IntlProvider } from "next-intl";

const LANG_KEY = "negozia360-lang";
const messagesMap: Record<string, Record<string, string>> = {
  es: esMessages,
  en: enMessages,
};

const LanguageContext = createContext({
  locale: "es",
  setLocale: (_lang: string) => {},
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocale] = useState("es");

  useEffect(() => {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored && ["es", "en"].includes(stored)) {
      setLocale(stored);
    }
  }, []);

  const handleSetLocale = (lang: string) => {
    setLocale(lang);
    localStorage.setItem(LANG_KEY, lang);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale }}>
      <IntlProvider
        locale={locale}
        messages={messagesMap[locale]}
        timeZone="America/Bogota"
      >
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
}
