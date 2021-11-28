import Link from 'next/link';

export default function News() {
    return (
    <>
        <div className="lg:w-9/12 mx-auto px-4 grid grid-cols-1">
            <div className="text-center">
                ニュース
            </div>
            <NewsTable />
            <div className="text-center py-4">
                <button className="pastNews">
                    <Link href="/newslist">
                        過去のニュースはこちらから
                    </Link>
                </button>
            </div>
        </div>
    </>
    )
}

interface NewsData {
    date: string,
    headline: string,
    url: string
}

const NewsTable = () => {
    /*
        ニュース一覧を DB から取得するやつを誰かが書く
        {
            NewsData[]
        }
    */

    // モック
    const newsDatas: Array<NewsData> = [];
    for (let i = 0; i < 10; i++) {
        const data: NewsData = {
            date: "1111-11-11",
            headline: "New job: fix Mr. Gluck’s hazy TV, PDQ!",
            url: i.toString(10)
        };
        data.url = "/newsilst/" + data.url;

        newsDatas.push(data);
    }

    return (<>
        <table className="border-b-2 border-t-2">
            <tbody>
                {newsDatas.map((data) => 
                    <tr key={data.url}>
                        <td className="font-bold">
                            {data.date}
                        </td>
                        <td>
                            <Link href={data.url}>
                                {data.headline}
                            </Link>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </>);
}