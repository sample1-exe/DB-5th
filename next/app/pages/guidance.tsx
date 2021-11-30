import Header from '../components/header'
import Footer from '../components/footer'

export default function Guidance() {
  const title: string = "コース案内 | AIスマート工学コース";
  return ( 
    <>
      <div className="wrapper">
        <Header 
          title={title}
        />

        <div className="grid grid-cols-1 p-8">
          <div className="border-b-4 border-black text-4xl mb-16">
            コース案内
          </div>

          <div className="mb-8">
            <div className="border-b-2 border-black text-3xl mb-2">
              コースの特徴
            </div>
            <div>
              <img className="float-right ml-4 my-2 h-64" src={"/mock.jpg"} />
              <p>
                コースの特徴を書く
              </p>
            </div>
          </div>

          <div>
            <div className="border-b-2 border-black text-3xl mb-2">
              ポリシー
            </div>
            <div>
              ポリシーを書く
            </div>
          </div>
        </div>
      
        <Footer />
      </div>
    </>
  )
}
