import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from '../public/content/content';
import { LangContext } from './LangContext';
import { ThemeContext } from './ThemeContext';

export default function Header() {
  const [animated, setAnimated] = useState(false);
  const { lang, SetLang } = React.useContext(LangContext);
  const { theme, setTheme } = React.useContext(ThemeContext);
  
  useEffect(() => {
    setAnimated(true);
  }, []);

  if (lang === "no") {return (
    <div
      className="min-h-screen flex items-center justify-center dark:bg-gray-900 bg-white"
    >
      <div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
        {theme === "dark" ? (
                <div className="w-full md:w-2/5">
                  <LazyLoadImage
                      src={content.no.header.imgDark}
                      effect="blur"
                      placeholderSrc={process.env.PUBLIC_URL + '/logo512.png'}
                    />
                </div>
        ) : (
          <div className="w-full md:w-2/5">
          <LazyLoadImage
              src={content.no.header.img}
              effect="blur"
              placeholderSrc={process.env.PUBLIC_URL + '/logo512.png'}
            />
        </div>
        )
        }

        <div className="dark:text-white text-gray-900 font-dosis text-center md:text-left">
        <h2
            className={`${
              animated ? '' : 'translate-y-10 opacity-0'
            }  transform transition duration-2000 ease-in-out text-3xl md:text-5xl font-bold`}
          >
            {content.no.header.text[0]}
            <br />
            {content.no.header.text[1]}
          </h2>
          <ScrollLink to="stack" smooth={true}>
            <button className=" animate-float bg-indigo-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg">
              {content.no.header.btnText}
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );}
  else {
    return (
      <div
      className="min-h-screen flex items-center justify-center dark:bg-gray-900 bg-white"
    >
      <div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
      {theme === "dark" ? (
                <div className="w-full md:w-2/5">
                  <LazyLoadImage
                      src={content.no.header.imgDark}
                      effect="blur"
                      placeholderSrc={process.env.PUBLIC_URL + '/logo512.png'}
                    />
                </div>
        ) : (
          <div className="w-full md:w-2/5">
          <LazyLoadImage
              src={content.no.header.img}
              effect="blur"
              placeholderSrc={process.env.PUBLIC_URL + '/logo512.png'}
            />
        </div>
        )
        }
        <div className="dark:text-white text-gray-900 font-dosis text-center md:text-left">
        <h2
            className={`${
              animated ? '' : 'translate-y-10 opacity-0'
            }  transform transition duration-2000 ease-in-out text-3xl md:text-5xl font-bold`}
          >
            {content.en.header.text[0]}
            <br />
            {content.en.header.text[1]}
          </h2>
          <ScrollLink to="stack" smooth={true}>
            <button className=" animate-float bg-indigo-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg">
              {content.en.header.btnText}
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
    )
  }
}