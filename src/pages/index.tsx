import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  function switchToRender(event: React.SyntheticEvent): void {
    console.log(event)
  }

  return (
    <>
      <Head>
        <title>SVG Animation Tester</title>
        <meta
          name="description"
          content="🧪 See what your SVG looks like animated before coding it."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>SVG Animation Tester</h1>
        <form className={styles.form} onClick={switchToRender}>
          <div>
            <input type="file" accept=".svg" className={styles.fileUpload} />
          </div>
          <div>or</div>
          <textarea name="svg" cols={30} rows={10}></textarea>
        </form>
      </main>
      <footer>
        &copy; <a href="https://mattglei.ch">Matt Gleich</a>{' '}
        {new Date().getFullYear()} <span style={{ marginRight: '20px' }} />
        <a href="https://github.com/gleich/svg-animation-tester">
          gleich/svg-animation-tester
        </a>
      </footer>
    </>
  )
}

export default Home
