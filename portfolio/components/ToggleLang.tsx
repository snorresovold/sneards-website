import React from 'react'

import { ThemeContext } from './ThemeContext';
import { LangContext } from "./LangContext"

function ToggleLang() {
    const { theme, setTheme } = React.useContext(ThemeContext);
    const { lang, setLang } = React.useContext(LangContext);
    return (
        <div>
        {lang === "no"? (
            <button onClick={() => setLang(lang === 'no' ? 'en' : 'no')} className="inline-block p-3 text-4xl">
            π³π΄
            </button>       
        ) : (
            <button onClick={() => setLang(lang === 'no' ? 'en' : 'no')} className="inline-block p-3  text-4xl">
            πΊπΈ
            </button>
        )}
        </div>
    )
}

export default ToggleLang