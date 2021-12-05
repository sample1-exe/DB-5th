import Header from '../components/header'
import Footer from '../components/footer'

export default function Activity() {
  const title: string = "キャリア | AIスマート工学コース";
  return ( 
    <>
      <div className="wrapper">
        <Header 
          title={title}
        />

        <div className="grid grid-cols-1 p-8">
          <div className="border-b-4 border-black text-4xl mb-16">
            キャリア
          </div>

          <div className="p-8">
            <div className="border-b-2 border-black text-3xl pb-4">
              進学
            </div>
            <CollegeTable />
          </div>

          <div className="p-8">
            <div className="border-b-2 border-black text-3xl pb-4">
              就職
            </div>
            <CorporateTable />
          </div>
        </div>
      
        <Footer />
      </div>
    </>
  )
}

interface CollegeData {
  college: string
}

const CollegeTable = () => {
  /*
      活動一覧を DB から取得するやつを誰かが書く
      {
          ActivityData[]
      }
  */

  // モック
  const collegeDatas: Array<CollegeData> = [];
  for (let i = 0; i < 10; i++) {
      const data: CollegeData = {
        college: "第" + i.toString(10) + "宇宙大学"
      };

      collegeDatas.push(data);
  }

  return (<>
      <table className="table-auto">
          <tbody>
              {collegeDatas.map((data) => 
                  <tr key={data.college}>
                      <td>{data.college}</td>
                  </tr>
              )}
          </tbody>
      </table>
  </>);
}

interface CorporateData {
  corporate: string
}

const CorporateTable = () => {
  /*
      活動一覧を DB から取得するやつを誰かが書く
      {
          ActivityData[]
      }
  */

  // モック
  const corporateDatas: Array<CollegeData> = [];
  for (let i = 0; i < 10; i++) {
      const data: CollegeData = {
        college: "第" + i.toString(10) + "宇宙会社"
      };

      corporateDatas.push(data);
  }

  return (<>
      <table className="table-auto">
          <tbody>
              {corporateDatas.map((data) => 
                  <tr key={data.college}>
                      <td>{data.college}</td>
                  </tr>
              )}
          </tbody>
      </table>
  </>);
}