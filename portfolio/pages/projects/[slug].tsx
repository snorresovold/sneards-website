import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import React, {useEffect} from 'react'
import { LangContext } from '../../components/LangContext'
import Popup from '../../components/Popup'


export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}: any) {
  const { lang, SetLang } = React.useContext(LangContext);
  
  return (
    <>
    <div>
      <Popup/>
    </div>
      <Link href='/'>
        <a className='btn btn-back'>Go Back</a>
      </Link>
      <div className='card card-page'>
        <h1 className='post-title'>{title}</h1>
        <div className='post-date'>Posted on {date}</div>
        <img src={cover_image} alt='' />
        <div className='post-body'>
          <div className='post-body' dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </>
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