import Header from '../components/Header'
import '../styles/globals.css'
import Head from 'next/head'
import { ThemeProvider } from '../components/ThemeContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider>
        <Head>
          <title>Snorre's Portfolio</title>
        </Head>
        <Header />
        <main className='container'>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  )
}

export default MyApp