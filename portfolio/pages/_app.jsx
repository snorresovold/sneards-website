import '../styles/globals.css'
import Head from 'next/head'
import { ThemeProvider } from '../components/ThemeContext'
import { LangProvider } from '../components/LangContext'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <div className='dark:bg-gray-900 bg-white'>
    <ThemeProvider>
       <LangProvider>
          <Head>
            <title>Snorre's Portfolio</title>
          </Head>
          <Header />
            <Component {...pageProps} />
        </LangProvider>
      </ThemeProvider>
    </div>
  )
}

export default MyApp