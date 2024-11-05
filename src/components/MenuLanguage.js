import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "../App.css";

export default function MenuLanguage() {
  const [selectLanguage, setSelectedLanguage] = useState("");
  const { i18n } = useTranslation();
  const selectRef = useRef(null);

  useEffect(() => {
    const setInitialLanguage = async () => {
      const savedLanguage = localStorage.getItem("selectedLanguage") || "FR";
      if (selectRef.current) {
        selectRef.current.value = savedLanguage;
        setSelectedLanguage(savedLanguage.toLowerCase());
        await i18n.changeLanguage(savedLanguage.toLowerCase());
      }
    };
    setInitialLanguage();
  }, [i18n]);

  // Handle language change event
  const handleLanguageChange = async (event) => {
    const selectedLang = event.target.value;
    setSelectedLanguage(selectedLang);
    localStorage.setItem("selectedLanguage", selectedLang);
    await i18n.changeLanguage(selectedLang.toLowerCase()); // Change language using i18n
  };

  return (
    <form noValidate={true} className="max-w-[100px]">
      <select
        ref={selectRef}
        name="langauge"
        value={selectLanguage}
        onChange={handleLanguageChange}
        className="py-1 px-2  block w-full border-gray-200 rounded-lg text-[10px] md:text-base focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
      >
        <option value="FR">French</option>
        <option value="GR">German</option>
        <option value="IT">Italian</option>
        <option value="EN">English</option>
      </select>
    </form>
  );
}
