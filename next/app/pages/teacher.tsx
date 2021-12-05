import { GetServerSideProps } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'

export const getServerSideProps: GetServerSideProps = async () => {
  const teacherJson = await fetch("http://db5th_go:8080/select/teacher")
      .then(res => res.json())
  return { props: { teacherJson } }
}

export default function Activity(teacherJson) {
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

          <TeacherTable teacherJson={teacherJson.teacherJson} />
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

const TeacherTable = (teacherJson) => {
  console.log(teacherJson.teacherJson)
  const teacherDatas: Array<TeacherData> = [];
  for (const teacherData of teacherJson.teacherJson) {
      const data: TeacherData = {
        teacherName: teacherData.Teacher_name,
        subject: "",
        faceURL: "./who.png"
      };

      teacherDatas.push(data);
  }

  return (<>
        {teacherDatas.map((data) =>
          <div className="grid grid-cols-2 pb-4">
            <div className="col-span-1">
              <div className="border-b-2 border-black text-2xl font-bold">
                {data.teacherName}
              </div>
              担当教科
            </div>
            <img src="./who.png" className="h-32 p-4"/>
          </div>
        )}
  </>);
}