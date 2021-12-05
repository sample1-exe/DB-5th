import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Event() {
    return (
    <>
        <div className="grid grid-cols-1 py-8">
            <Link href="/">
                <img
                    src="/mock.jpg"
                    width="100%"
                />
            </Link>
        </div>
    </>
    )
}
