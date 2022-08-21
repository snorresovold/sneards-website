import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { LangContext } from './LangContext'
import React from 'react';

export default function Post({ post }: any) {
  const { lang, SetLang } = React.useContext(LangContext);

  return (
    <div className='text-gray-900 dark:text-white '>

        <LazyLoadImage
          className="object-cover w-full h-56 rounded-xl"
          src={post.frontmatter.cover_image}
        />

        <div className="p-6">
          <h5 className="text-xl font-bold">
            {post.frontmatter.title}
          </h5>

          <p className="mt-2 text-sm text-gray-500">
            {post.frontmatter.excerpt}
          </p>

          <div
            className="inline-block pb-1 mt-4 font-medium text-blue-600 border-b border-blue-500 "
          >
            {lang === "no" ? (
            <Link href={`/projects/${post.slug}`}>
              <a className='btn'>
                Les mer
                <span aria-hidden="true">&rarr;</span>
              </a>
            </Link>
            ) : (
              <Link href={`/projects/${post.slug}`}>
            <a className='btn'>
              Read more
              <span aria-hidden="true">&rarr;</span>
            </a>
            </Link>
            )}
          </div>
        </div>
      </div>
  )
}