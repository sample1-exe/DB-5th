import { GetServerSideProps } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'

export const getServerSideProps: GetServerSideProps = async () => {
    const school = await fetch("http://db5th_go:8080/select/continue_school")
        .then(res => res.json())
    const company = await fetch("http://db5th_go:8080/select/continue_company")
        .then(res => res.json())

    return { props: { school, company } }
}

export default function Activity(props) {
    const title: string = "キャリア | AIスマート工学コース";
    return (<>
        <div className="wrapper">
            <Header title={title} />
            <div className="grid grid-cols-1 p-8">
                <div className="border-b-4 border-black text-4xl mb-16">
                    キャリア
                </div>
                <div className="p-8">
                    <div className="border-b-2 border-black text-3xl pb-4">
                        進学
                    </div>
                    <CollegeTable school={props.school} />
                </div>
                <div className="p-8">
                    <div className="border-b-2 border-black text-3xl pb-4">
                        就職
                    </div>
                    <CorporateTable company={props.company} />
                </div>
            </div>
            <Footer />
        </div>
    </>)
}

interface CollegeData {
    college: string
}

const CollegeTable = (props) => {
    const collegeDatas: Array<CollegeData> = [];
    for (const school of props.school) {
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

const CorporateTable = (props) => {
    const corporateDatas: Array<CorporateData> = [];
    for (const corporate of props.company) {
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