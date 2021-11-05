import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>svg tester</title>
        <meta
          name="description"
          content="🧪 See what your SVG looks like animated before coding it."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}

export default Home
