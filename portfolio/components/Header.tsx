import Link from 'next/link'
import Toggle from "./ToggleTheme"
import React, { useEffect } from 'react';
import { ThemeContext } from './ThemeContext';
import { LangContext } from "./LangContext"
import content from "../public/content/content"
import ToggleTheme from './ToggleTheme';
import ToggleLang from './ToggleLang';

export default function Header() {
    const { theme, setTheme } = React.useContext(ThemeContext);
    const { lang, SetLang } = React.useContext(LangContext);
    
    return (
        <div>
            <header className='bg-white dark:bg-gray-900 mb-10 flex'>
                <div className='flex items-center h-16 max-w-screen-xl gap-8 px-4 mx-auto sm:px-6 lg:px-8 font-dosis'>
                    <Link href='/'>
                        <h2 className='cursor-pointer text-xl text-gray-500 dark:text-white dark:hover:text-white/75 transition hover:text-gray-500/75'>Snorre Søvold</h2>
                    </Link>
                </div>
                <div className="flex items-center justify-end flex-1 md:justify-between">
                <nav className="hidden md:block" aria-labelledby="header-navigation">
                    <ul className="flex items-center gap-6 text-sm">
                    <li>
                        <a className="nav-txt" href="/">
                        {lang === "no" ? (
                            <h1>{content.no.text}</h1>
                        ): (
                            <h1>{content.en.text}</h1>
                        )}
                        </a>
                    </li>

                    <li>
                        <a className="nav-txt" href="/">
                        Careers
                        </a>
                    </li>

                    <li>
                        <a className="nav-txt" href="/">
                        History
                        </a>
                    </li>

                    <li>
                        <a className="nav-txt" href="/">
                        Services
                        </a>
                    </li>

                    <li>
                        <a className="nav-txt" href="/">
                        Projects
                        </a>
                    </li>

                    <li>
                        <a className="nav-txt" href="/">
                        Blog
                        </a>
                    </li>
                    </ul>
                </nav>
            </div>
            <div className='flex justify-center items-center h-16'>
                <ToggleTheme/>
                <ToggleLang />
            </div>
        </header>
    </div>
    );
}