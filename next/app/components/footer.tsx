import Link from 'next/link'


export default function Footer() {
    return (
        <>
        <footer className="justify-center items-center footer flex space-x-8">
            <Link href="/">
                コース案内
            </Link>
            <Link href="/">
                コース活動
            </Link>
            <Link href="/">
                授業
            </Link>
            <Link href="/">
                教員
            </Link>
            <Link href="/">
                キャリア
            </Link>
            <Link href="/">
                連携協定
            </Link>
        </footer>
        </>
    )
}