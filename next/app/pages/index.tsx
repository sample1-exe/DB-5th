import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
        <Link href="/link">
          <a>移動するよぉ</a>
        </Link>
    </div>
  )
}
