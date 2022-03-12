import Head from 'next/head'

import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza shop</title>
        <meta name="description" content="best pizza shop in Lagos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider/>
    </div>
  )
}
