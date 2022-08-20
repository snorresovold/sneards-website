import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import React, {useEffect} from 'react'
import { LangContext } from '../../components/LangContext'
import Popup from '../../components/Popup'
import { LazyLoadImage } from 'react-lazy-load-image-component'


export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}: any) {
  const { lang, SetLang } = React.useContext(LangContext);
  
  return (
    <div className='text-gray-900 dark:text-white bg-white dark:bg-gray-900'>
      <div className=''>
        <h1 className='text-3xl text-center'>{title}</h1>
        <div className='text-l text-center'>Posted on {date}</div>
        <div className="flex justify-center items-center">
          <LazyLoadImage src={cover_image}  className="object-cover w-2/3 rounded-xl"/>
        </div>
          <div className='ml-64 mr-64 mt-12' dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const Enfiles = fs.readdirSync(path.join('en'))
  const Nofiles = fs.readdirSync(path.join('no'))
  const files = Enfiles.concat(Nofiles);
  

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }: any) {
  try {
    const markdownWithMeta = fs.readFileSync(
      path.join('en', slug + '.md'),
      'utf-8'
    )
    const { data: frontmatter, content } = matter(markdownWithMeta)
    return {
      props: {
        frontmatter,
        slug,
        content,
      },
    }
  } catch {
    const markdownWithMeta = fs.readFileSync(
      path.join('no', slug + '.md'),
      'utf-8'
    )
    const { data: frontmatter, content } = matter(markdownWithMeta)
    return {
      props: {
        frontmatter,
        slug,
        content,
      },
    }
  }
}