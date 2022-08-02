import React from 'react'

import { ThemeContext } from './ThemeContext';
import { LangContext } from "./LangContext"

function ToggleLang() {
    const { theme, setTheme } = React.useContext(ThemeContext);
    const { lang, setLang } = React.useContext(LangContext);
    return (
        <div>
        {lang === "en"? (
            <button onClick={() => setLang(lang === 'no' ? 'en' : 'no')} className="inline-block p-3 text-white bg-indigo-600 border border-indigo-600 rounded-full hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring">
            🇳🇴
            </button>       
        ) : (
            <button onClick={() => setLang(lang === 'no' ? 'en' : 'no')} className="inline-block p-3 text-indigo-600 border border-indigo-600 rounded-full hover:text-white hover:bg-indigo-600 active:bg-indigo-500 focus:outline-none focus:ring">
            🇦🇫
            </button>
        )}
        </div>
    )
}

export default ToggleLang