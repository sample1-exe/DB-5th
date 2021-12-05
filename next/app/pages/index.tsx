import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Event from '../components/index/event'
import News from '../components/index/news'

export default function Home() {
  const title: string = "TOPページ | AIスマート工学コース";
  return ( 
    <>
    
      <div className="wrapper">
        <Header title={title}/>
        <Event />
        <News />
        <Footer />
      </div>

    </>
  )
}
