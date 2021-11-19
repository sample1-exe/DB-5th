import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head';
import Header from './components/header';

export default function Home() {
  const title: string = "TOPページ | AIスマート工学コース";
  return ( 
    <>
      <Header 
        title={title}
      />
      <Link href="/link">
        <h1 className="fontColor">移動するよぉ</h1>
      </Link>
    </>
  )
}
