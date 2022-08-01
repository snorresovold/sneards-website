    import Link from 'next/link'
    import Toggle from "./Toggle"
    import React from 'react';
    import { ThemeContext } from './ThemeContext';

    export default function Header() {
    const { theme, setTheme } = React.useContext(ThemeContext);
    return (
        <header className='bg-white dark:bg-gray-900 mb-10 flex'>
            <div className='flex items-center h-16 max-w-screen-xl gap-8 px-4 mx-auto sm:px-6 lg:px-8 text-gray-500 dark:text-white font-dosis'>
                <Link href='/'>
                    <h2 className='cursor-pointer text-xl'>Snorre Søvold</h2>
                </Link>
            </div>
            <div className="flex items-center justify-end flex-1 md:justify-between">
            <nav className="hidden md:block" aria-labelledby="header-navigation">
                <h2 className="sr-only" id="header-navigation">Header navigation</h2>

                <ul className="flex items-center gap-6 text-sm">
                <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                    About
                    </a>
                </li>

                <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                    Careers
                    </a>
                </li>

                <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                    History
                    </a>
                </li>

                <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                    Services
                    </a>
                </li>

                <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                    Projects
                    </a>
                </li>

                <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                    Blog
                    </a>
                </li>
                </ul>
            </nav>
        </div>
        <div className='flex justify-center items-center h-16'>
            <Toggle/>
        </div>
    </header>)
    }