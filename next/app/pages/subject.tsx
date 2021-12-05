import Link from 'next/link'
import { GetServerSideProps } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'

export const getServerSideProps: GetServerSideProps = async () => {
  const subjectJson = await fetch("http://db5th_go:8080/select/subject")
      .then(res => res.json())
  return { props: { subjectJson } }
}

export default function Activity(subjectJson) {
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

          <SubjectTable subjectJson={subjectJson.subjectJson} />
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

const SubjectTable = (subjectJson) => {
  const subjectDatas: Array<SubjectData> = [];
  for (const subjectData of subjectJson.subjectJson) {
    const data: SubjectData = {
      subjectName: subjectData.Subject_name,
      teacher: "未定",
      syllabusURL: ""
    }
    subjectDatas.push(data);
  }

  return (<>
      <table className="table-auto">
          <tbody>
              <tr>
                <th className="border border-black">科目名</th>
                <th className="border border-black">教員</th>
                <th className="border border-black"></th>
              </tr>
              {subjectDatas.map((data) => 
                  <tr key={data.subjectName} className="text-3xl">
                    <td className="border border-black">{data.subjectName}</td>
                    <td className="border border-black">{data.teacher}</td>
                      <td className="border border-black">
                      {/* <Link href={data.syllabusURL}>シラバス</Link> */}
                      {SyllabusURL(data.syllabusURL)}
                    </td>
                  </tr>
              )}
          </tbody>
      </table>
  </>);
}

function SyllabusURL(url) {
  if (url === "") {
    return (
      <div>
        シラバス
      </div>
    )
  }
  else {
    return (
      <div className="fontColor">
        <Link href={url}>シラバス</Link>
      </div>
    )
  }
}