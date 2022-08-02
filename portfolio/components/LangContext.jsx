import React from "react";

export const LangContext = React.createContext()

export const LangProvider = ({ initialLang, children }) => {
  const [lang, setLang] = React.useState("no");

  const checkLang = (existing) => {
    const root = window.document.documentElement;
    const isEnglish = existing === 'en';

    root.classList.remove(isEnglish ? 'no' : 'en');
    root.classList.add(existing);

    localStorage.setItem('current-lang', existing);
  };

  if (initialLang) {
    checkLang(initialLang);
  }

  React.useEffect(() => {
    checkLang(lang);
  }, [lang]);


  return (
    <LangContext.Provider value={{ lang, setLang }}>
        {children}
    </LangContext.Provider>
  )
}