import React from 'react'
import PostsList from '../components/PostsList'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'

import { sortByDate } from '../utils'

function Projects({posts}: any) {
  return (
    <PostsList  posts={posts}/>
  )
}

export default Projects

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
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
      posts: posts.sort(sortByDate),
    },
  }
}