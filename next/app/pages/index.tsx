import Link from 'next/link'
import Image from 'next/image'


export default function Home() {
  return (
    <div>
        <Link href="/link">
          <h1 className="fontColor">移動するよぉ</h1>
        </Link>
    </div>
  )
}
