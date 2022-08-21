import '../styles/globals.css'
import Head from 'next/head'
import { ThemeProvider } from '../components/ThemeContext'
import { LangProvider } from '../components/LangContext'
import Header from '../components/Header'
import dynamic from "next/dynamic"

function MyApp({ Component, pageProps }) {
  return (
    <div className='dark:bg-gray-900 bg-white min-h-screen'>
    <ThemeProvider>
       <LangProvider>
          <Head>
            <title>Snorre&apos;s Portfolio</title>
          </Head>
          <Header />
            <Component {...pageProps} />
        </LangProvider>
      </ThemeProvider>
    </div>
  )
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});