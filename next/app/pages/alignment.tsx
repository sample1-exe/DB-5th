import Header from '../components/header'
import Footer from '../components/footer'

export default function Activity() {
  const title: string = "連携協定 | AIスマート工学コース";
  return ( 
    <>
      <div className="wrapper">
        <Header 
          title={title}
        />

        <div className="grid grid-cols-1 p-8">
          <div className="border-b-4 border-black text-4xl mb-16">
            連携協定
          </div>
          本校AIスマート工学コースは以下の企業と連携協定を締結いたしました。

          <div className="p-8">
            <div className="border-b-2 border-black text-3xl pb-4">
              企業との連携
            </div>
            <CorporateAlignmentTable />
          </div>
          <div className="p-8">
            <div className="border-b-2 border-black text-3xl pb-4">
              他校との連携
            </div>
            <SchoolAlignmentTable />
          </div>
        </div>
      
        <Footer />
      </div>
    </>
  )
}

interface AlignmentData {
  name: string,
  date: string
}

const CorporateAlignmentTable = () => {
  /*
      活動一覧を DB から取得するやつを誰かが書く
      {
          ActivityData[]
      }
  */

  // モック
  const newsDatas: Array<AlignmentData> = [];
  for (let i = 0; i < 5; i++) {
      const data: AlignmentData = {
          name: "バカ株式会社" + i.toString(10),
          date: "1111-11-11"
      };

      newsDatas.push(data);
  }

  return (<>
      <table className="table-auto">
          <tbody>
              {newsDatas.map((data) => 
                  <tr key={data.name}>
                    <td>{data.name}</td>
                  </tr>
              )}
          </tbody>
      </table>
  </>);
}
const SchoolAlignmentTable = () => {
  /*
      活動一覧を DB から取得するやつを誰かが書く
      {
          ActivityData[]
      }
  */

  // モック
  const newsDatas: Array<AlignmentData> = [];
  for (let i = 0; i < 5; i++) {
      const data: AlignmentData = {
          name: "役立たず高校" + i.toString(10),
          date: "1111-11-11"
      };

      newsDatas.push(data);
  }

  return (<>
      <table className="table-auto">
          <tbody>
              {newsDatas.map((data) => 
                  <tr key={data.name}>
                    <td>{data.name}</td>
                  </tr>
              )}
          </tbody>
      </table>
  </>);
}
