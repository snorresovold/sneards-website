import React from "react";


const getInitialLang = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('current-lang');
    //console.log(storedPrefs)
    if (storedPrefs === 'en')
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }
  }
}
export const LangContext = React.createContext()


export const LangProvider = ({ initialLang, children }) => {
  const [lang, setLang] = React.useState(getInitialLang);

  const checkLang = (existing) => {
    if (lang === undefined){
      setLang('no')
    } 
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