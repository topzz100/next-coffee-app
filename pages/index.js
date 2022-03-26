import Head from 'next/head'
import List from '../components/List'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'
import axios from 'axios'

export default function Home({list}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee shop</title>
        <meta name="description" content="best coffee shop in Lagos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider/>
      <List list = {list}/>
    </div>
  )
}

export const getServerSideProps = async()=>{
  const res = await axios.get('http://localhost:3000/api/products')
  return{
    props: {
      list: res.data
    }
  }
}

