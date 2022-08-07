import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from '../public/content/content';

export default function Header() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center dark:bg-gray-900 bg-white"
    >
      <div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
        <div className="w-full md:w-2/5">
          <LazyLoadImage
              src={content.header.img}
              effect="blur"
              placeholderSrc={process.env.PUBLIC_URL + '/logo512.png'}
            />
        </div>
        <div className="text-white font-dosis text-center md:text-left">
          <ScrollLink to="stack" smooth={true}>
            <button className=" animate-float bg-indigo-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg">
              {content.header.btnText}
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}