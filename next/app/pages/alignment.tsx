import { GetServerSideProps } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'

export const getServerSideProps: GetServerSideProps = async () => {
  const companyJson = await fetch("http://db5th_go:8080/select/company")
      .then(res => res.json())
  return { props: { companyJson } }
}

export default function Activity(jsonData) {
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
            <CorporateAlignmentTable companyJson={jsonData.companyJson}/>
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

const CorporateAlignmentTable = (companyJson) => {
  const newsDatas: Array<AlignmentData> = [];
  for (const company of companyJson.companyJson) {
      const data: AlignmentData = {
          name: company.Company_name,
          date: company.Company_date
      };

      newsDatas.push(data);
  }

  return (<>
      <table className="table-auto">
          <tbody>
              {newsDatas.map((data) => 
                  <tr key={data.name}>
                    <td>{data.name}</td>
                    <td>{data.date}</td>
                  </tr>
              )}
          </tbody>
      </table>
  </>);
}
