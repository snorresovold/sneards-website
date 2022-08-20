import React, { useState, useEffect } from "react"
import { LangContext } from '../components/LangContext'
import Banner from "../components/Banner"
import Stack from "../components/Stack"


export default function Home({posts}: any) {
  const [animated, setAnimated] = useState(false);
  const { lang, SetLang } = React.useContext(LangContext);
  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div>
      <Banner />
      <Stack />
    </div>
  )
}

