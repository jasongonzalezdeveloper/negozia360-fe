"use client";
import React from "react";
import { useLanguage } from "../../app/i18nProvider";

export default function Header() {
  const { locale, setLocale } = useLanguage();

  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value);
  };

  return (
    <header
      className="h-18 flex justify-between items-center px-6 py-3 border-b border-gray-200 z-40 bg-[var(--colorBackgroundHeader)] ml-64"
      style={{
        color: "var(--colorText)",
      }}
    >
      <div className="flex items-center"></div>
      <div className="flex items-center gap-4">
        <select
          value={locale}
          onChange={handleLocaleChange}
          className="px-2 py-1 rounded border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
        <button className="px-3 py-1 rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition-colors">
          Log out
        </button>
      </div>
    </header>
  );
}
