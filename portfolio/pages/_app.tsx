import Header from '../components/Header'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>Snorre's Portfolio</title>
      </Head>
      <Header />
      <main className='container'>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp