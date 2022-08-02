import '../styles/globals.css'
import Head from 'next/head'
import { ThemeProvider } from '../components/ThemeContext'
import { LangProvider } from '../components/LangContext'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider>
       <LangProvider>
          <Head>
            <title>Snorre's Portfolio</title>
          </Head>
          <Header />
          <main className='container'>
            <Component {...pageProps} />
          </main>
        </LangProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp