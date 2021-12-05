import Header from '../components/header'
import Footer from '../components/footer'

export default function Activity() {
  const title: string = "コース活動 | AIスマート工学コース";
  return ( 
    <>
      <div className="wrapper">
        <Header 
          title={title}
        />

        <div className="grid grid-cols-1 p-8">
          <div className="border-b-4 border-black text-4xl mb-16">
            コース活動
          </div>

          現在、活動はありません。
        </div>
      
        <Footer />
      </div>
    </>
  )
}
