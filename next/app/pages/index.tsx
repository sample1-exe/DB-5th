import { GetServerSideProps } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'
import Event from '../components/index/event'
import News from '../components/index/news'

export const getServerSideProps: GetServerSideProps = async () => {
    const news = await fetch("http://db5th_go:8080/select/news")
        .then(res => res.json())
    return { props: { news } }
}

export default function Home( props ) {
    const title: string = "TOPページ | AIスマート工学コース";
    return (<>
        <div className="wrapper">
            <Header title={title}/>
            <Event />
            <News props={props}/>
            <Footer />
        </div>
    </>)
}
