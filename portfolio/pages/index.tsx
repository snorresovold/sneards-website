import React, { useState, useEffect } from "react"
import { LangContext } from '../components/LangContext'
import Banner from "../components/Banner"
import Stack from "../components/Stack"
import PostsList from '../components/PostsList'
import fs from 'fs';
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'
import { sortByDate } from '../utils'


export default function Home({posts}: any) {
  const [animated, setAnimated] = useState(false);
  const { lang, SetLang } = React.useContext(LangContext);
  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div>
      <Banner />
      <PostsList posts={posts} />
      <Stack />
    </div>
  )
}

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