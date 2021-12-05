import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'

export default function Activity() {
  const title: string = "授業 | AIスマート工学コース";
  return ( 
    <>
      <div className="wrapper">
        <Header 
          title={title}
        />

        <div className="grid grid-cols-1 p-8">
          <div className="border-b-4 border-black text-4xl mb-16">
            授業
          </div>

          <SubjectTable />
        </div>
      
        <Footer />
      </div>
    </>
  )
}

interface SubjectData {
  subjectName: string,
  teacher: string,
  syllabusURL: string,
}

const SubjectTable = () => {
  /*
      活動一覧を DB から取得するやつを誰かが書く
      {
          SubjectData[]
      }
  */

  // モック
  const subjectDatas: Array<SubjectData> = [];
  for (let i = 0; i < 10; i++) {
      const data: SubjectData = {
        subjectName: "帝王学" + i.toString(10),
        teacher: "天上人",
        syllabusURL: "/subjec/syllabus/" + i.toString(10),
      };

      subjectDatas.push(data);
  }

  return (<>
      <table className="table-auto">
          <tbody>
              {subjectDatas.map((data) => 
                  <tr key={data.subjectName} className="text-3xl">
                    <td className="border border-black">{data.subjectName}</td>
                    <td className="border border-black">{data.teacher}</td>
                    <td className="border border-black fontColor">
                      <Link href={data.syllabusURL}>シラバス</Link>
                    </td>
                  </tr>
              )}
          </tbody>
      </table>
  </>);
}