import React from 'react'
import PostsList from '../components/PostsList'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import { sortByDate } from '../utils'
import { LangContext } from '../components/LangContext'

function Projects({en, no}: any) {
  const { lang, SetLang } = React.useContext(LangContext);
  if (lang == "en") {
    return (
      <div suppressHydrationWarning className='dark:bg-gray-900 bg-white pl-16 pr-16'>
          <PostsList  posts={en}/>
      </div>
    )
  } else {
    return (
      <div suppressHydrationWarning className='dark:bg-gray-900 bg-white pl-16 pr-16'>
          <PostsList  posts={no}/>
      </div>
    )
  }
}

export default Projects

export async function getStaticProps() {
  // Get files from the posts dir
  const Enfiles = fs.readdirSync(path.join('en'))
  const Nofiles = fs.readdirSync(path.join('no'))

  // Get slug and frontmatter from posts
  const EnPosts = Enfiles.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('en', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  const NoPosts = Nofiles.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('no', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })


  return {
    props: {
      en: EnPosts.sort(sortByDate),
      no: NoPosts.sort(sortByDate)
    },
  }
}