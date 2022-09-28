import Head from 'next/head'
import styles from '../styles/layout/Home.module.scss'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CardList from '../components/CardList/CardList'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CardList list={"cities"} />
      <CardList list={"experiences"} />
      <Navbar/>
      <Hero />
    </div>
  )
}
