import Link from 'next/link'

export default function Footer() {
    return (<>
        <footer className="justify-center items-center footer flex space-x-8">
            <Link href="/guidance">
                コース案内
            </Link>
            <Link href="/activity">
                コース活動
            </Link>
            <Link href="/subject">
                授業
            </Link>
            <Link href="/teacher">
                教員
            </Link>
            <Link href="/career">
                キャリア
            </Link>
            <Link href="/alignment">
                連携協定
            </Link>
        </footer>
    </>)
}