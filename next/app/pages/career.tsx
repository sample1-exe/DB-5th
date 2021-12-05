import { GetServerSideProps } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'

export const getServerSideProps: GetServerSideProps = async () => {
  const schoolJson = await fetch("http://db5th_go:8080/select/continue_school")
      .then(res => res.json())
  const companyJson = await fetch("http://db5th_go:8080/select/continue_company")
      .then(res => res.json())
  
  return { props: { schoolJson, companyJson } }
}

export default function Activity(jsonData) {
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
            <CollegeTable schoolJson={jsonData.schoolJson} />
          </div>

          <div className="p-8">
            <div className="border-b-2 border-black text-3xl pb-4">
              就職
            </div>
            <CorporateTable companyJson={jsonData.companyJson} />
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

const CollegeTable = (schoolJson) => {

  const collegeDatas: Array<CollegeData> = [];
  for (const school of schoolJson.schoolJson) {
      const data: CollegeData = {
        college: school.School_name
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

const CorporateTable = (companyJson) => {
  // モック
  const corporateDatas: Array<CorporateData> = [];
  for (const corporate of companyJson.companyJson) {
      const data: CorporateData = {
        corporate: corporate.Company_name
      };

      corporateDatas.push(data);
  }

  return (<>
      <table className="table-auto">
          <tbody>
              {corporateDatas.map((data) => 
                  <tr key={data.corporate}>
                      <td>{data.corporate}</td>
                  </tr>
              )}
          </tbody>
      </table>
  </>);
}