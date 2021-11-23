import Head from 'next/head';
import Image from 'next/image';

export default function Header(props) {
    return (
    <>
    <Head>
        <title>{props.title}</title>
    </Head>
    <header className="header grid xl:grid-cols-2 lg:grid-cols-2 items-center">
        <div className="text-5xl justify-left fontColor hidden lg:inline-block">
            AIスマート工学コース
        </div>
        <div
        className="xl:col-end-3 lg:con-end-3 flex lg:justify-end md:justify-center">
        <Image 
            src="/sangikousen-removebg.png"
            width="360"
            height="80"
            className=""
        />
        </div>
    </header>
    </>
    )
}