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

          <ActivityTable />
        </div>
      
        <Footer />
      </div>
    </>
  )
}

interface ActivityData {
  date: string,
  title: string,
  image: string,
  detail: string,
}

const ActivityTable = () => {
  /*
      活動一覧を DB から取得するやつを誰かが書く
      {
          ActivityData[]
      }
  */

  // モック
  const newsDatas: Array<ActivityData> = [];
  for (let i = 0; i < 2; i++) {
      const data: ActivityData = {
          date: "1111-11-11",
          title: "New job: fix Mr. Gluck’s hazy TV, PDQ!" + i.toString(10),
          image: '/mock.jpg',
          detail: 'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえあさきゆめみしゑひもせす'
      };

      newsDatas.push(data);
  }

  return (<>
      <table className="table-auto">
          <tbody>
              {newsDatas.map((data) => 
                  <tr key={data.title}>
                      <td>
                          <img src={data.image} className="h-64" />
                      </td>
                      <td>
                        <div className="border-b-2 border-black text-2xl font-bold">
                          <span className="pr-8">{data.title}</span>
                          <span>{data.date}</span>
                        </div>
                        <div>
                          {data.detail}
                        </div>
                      </td>
                  </tr>
              )}
          </tbody>
      </table>
  </>);
}