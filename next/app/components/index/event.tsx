import Link from 'next/link';

export default function Event() {
    return (<>
        <div className="grid grid-cols-1 py-8">
            <Link href="https://www.metro-cit.ac.jp/kousen.html">
                <img src="/mock.jpg" width="80%" className="mx-auto" />
            </Link>
        </div>
    </>)
}
