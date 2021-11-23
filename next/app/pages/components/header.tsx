import Head from 'next/head';
import Image from 'next/image';

export default function Header(props) {
    return (
    <>
    <Head>
        <title>{props.title}</title>
    </Head>
    <div className="header">
        <div className="text-4xl justify-left fontColor m-1">
            AIスマート工学コース
        </div>
        <Image 
            src="/sangikousen.png"
            width="360"
            height="80"
            className=""
        />
    </div>
   {/*div className="header grid-cols-12">
        <div className="fontColor">
          <div className="text-5xl">AIスマート工学コース</div>
          
          {<Image 
            className="right-0"
            src="/sangikousen.png"
            width={200}
            height={100}
          />}
        </div> 
      </div>*/}
    </>
    )
}