import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import content from '../public/content';
import { LangContext } from './LangContext';

export default function Stack() {

    const { lang, setLang } = React.useContext(LangContext);
    if (lang === "no") {
        return (
            <div
            className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 daak flex flex-col items-center justify-center font-dosis"
            id="stack"
            >
                <h1 className="text-5xl font-bold">Teknologier eg kan</h1>
                <div className="flex flex-wrap justify-center mt-10">
                    {content.no.stack.tech.map((tech, index) => {
                        return (
                            <span
                            key={index}
                            className={`${
                                index % 2 === 0 ? ' animate-float' : ' animate-refloat'
                            } w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-5 `}
                            >
                            <LazyLoadImage src={tech.img} alt={tech.alt} />
                            </span>
                        );
                    })}
                </div>
                <p className="w-11/12 md:max-w-xl text-xl text-center mt-10 text-gray-900 dark:text-white">
                    {content.no.stack.desc}
                </p>
            </div>
        );
    } else {
        return (
            <div
            className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center justify-center font-dosis"
            id="stack"
            >
                <h1 className="text-5xl font-bold">Technologies i know</h1>

                <div className="flex flex-wrap justify-center mt-10">
                    {content.en.stack.tech.map((tech, index) => {
                        return (
                            <span
                            key={index}
                            className={`${
                                index % 2 === 0 ? ' animate-float' : ' animate-refloat'
                            } w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-5 `}
                            >
                                <LazyLoadImage src={tech.img} alt={tech.alt} />
                            </span>
                        );
                    })}
                </div>
                <p className="w-11/12 md:max-w-xl text-xl text-center mt-10 text-gray-900 dark:text-white">
                    {content.en.stack.desc}
                </p>
            </div>
        );
    }
}