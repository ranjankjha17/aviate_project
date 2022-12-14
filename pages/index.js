import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from './components/card'
import Converter from './components/converter'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blockchain</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex flex-col'>
        <Card />
        <Converter />
      </div>
      <footer>

      </footer>
    </div>
  )
}
