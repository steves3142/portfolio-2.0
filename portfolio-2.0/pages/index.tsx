import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Steve's Portfolio</title>
      </Head>
      <h1 className="text-red-500">Let's Build an AWESOME portfolio</h1>

    </div>
  )
}

export default Home
