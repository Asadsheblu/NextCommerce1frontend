import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'

import Banner from "./Product/Banner"
import Product from "./Product/Product"
import Marketing from './Marketing'

import Popular from './Product/Popular'
import Psystem from './Product/Psystem'
import Trending from './Product/Trending'
export default function Home() {
  return (
    <div className="bg-light container-fluid">
      <Head>
        <title>FERI E-commerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main>
       
    <Banner/>
    <Trending/>
    <Popular/>
    <Psystem/>
    <Product/>
  
        </main>
    </div>
  )
}
