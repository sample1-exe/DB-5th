import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Header(props) {
    return (<>
        <Head>
            <title>{props.title}</title>
        </Head>
        <header className="header grid grid-cols-2 items-center px-2">
            <div className="text-5xl justify-left fontColor hidden lg:inline-block">
                <Link href="/">
                    AIスマート工学コース
                </Link>
            </div>
            <div className="col-end-3 col-span-2 lg:col-span-1 flex justify-center lg:justify-end">
                <Link href="/">
                    <Image src="/sangikousen-removebg.png" width="360" height="80" />
                </Link>
            </div>

            <div className="col-start-1 col-end-3 lg:col-end-2 flex justify-between text-center fontColor border-b-2 border-black">
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
            </div>
        </header>
    </>)
}