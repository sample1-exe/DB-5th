import Header from '../components/header'
import Footer from '../components/footer'

export default function Activity() {
  const title: string = "教員 | AIスマート工学コース";
  return ( 
    <>
      <div className="wrapper">
        <Header 
          title={title}
        />

        <div className="grid grid-cols-1 p-8">
          <div className="border-b-4 border-black text-4xl mb-16">
            教員
          </div>

          <TeacherTable />
        </div>
      
        <Footer />
      </div>
    </>
  )
}

interface TeacherData {
  teacherName: string,
  subject: string,
  faceURL: string
}

const TeacherTable = () => {
  /*
      活動一覧を DB から取得するやつを誰かが書く
      {
          ActivityData[]
      }
  */

  // モック
  const teacherDatas: Array<TeacherData> = [];
  for (let i = 0; i < 10; i++) {
      const data: TeacherData = {
        teacherName: "天上人" + i.toString(10),
        subject: "帝王学",
        faceURL: "./mock.jpg"
      };

      teacherDatas.push(data);
  }

  return (<>
      <table className="table-auto">
          <tbody>
              {teacherDatas.map((data) => 
                  <tr key={data.teacherName}>
                      <td>
                        <div className="border-b-2 border-black text-2xl font-bold">
                          <span className="pr-8">{data.teacherName}</span>
                        </div>
                        <div>
                          担当教科
                        </div>
                        <div>
                          {data.subject}
                        </div>
                      </td>
                      <td>
                          <img src={data.faceURL} className="h-64" />
                      </td>
                  </tr>
              )}
          </tbody>
      </table>
  </>);
}