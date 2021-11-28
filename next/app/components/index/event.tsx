import Head from 'next/head';
import Image from 'next/image';

export default function Event() {
    return (
    <>
        <div className="grid grid-cols-1 py-8">
            <Image 
                src="/event_mock.jpg"
                width="500"
                height="300"
                objectFit="contain"
            />
        </div>
    </>
    )
}

interface NewsData {
}

function getEvent() {
    // 画像とURLを取得する
}