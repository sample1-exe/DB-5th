export default function News({ props }) {
    return (<>
        <div className="lg:w-9/12 mx-auto px-4 grid grid-cols-1">
            <div className="text-center">
                ニュース
            </div>
            <NewsTable news={props.news}/>
        </div>
    </>)
}

interface NewsData {
    id: number,
    date: string,
    headline: string,
}

const NewsTable = (props) => {
    const newsDatas: Array<NewsData> = [];
    for (const newsData of props.news) {
        const data: NewsData = {
            id: newsData.ID,
            date: newsData.UpdatedAt,
            headline: newsData.News_data
        }
        newsDatas.push(data)
    }

    return (<>
        <table className="border-b-2 border-t-2">
            <tbody>
                {newsDatas.map((data) =>
                    <tr key={data.id}>
                        <td className="font-bold">
                            {data.date}
                        </td>
                        <td>
                            {data.headline}
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </>);
}