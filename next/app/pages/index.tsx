import Link from 'next/link'
import Image from 'next/image'


export default function Home() {
  return (
    <div>
        <Link href="/link">
          <h1 className="text-red-600">移動するよぉ</h1>
        </Link>
    </div>
  )
}
