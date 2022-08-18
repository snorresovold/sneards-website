import React, { useState, useEffect } from "react"
import { LangContext } from '../components/LangContext'
import Banner from "../components/Banner"
import Stack from "../components/Stack"
import PostsShowcase from '../components/PostsShowcase'
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
      <PostsShowcase />
      <Stack />
    </div>
  )
}

