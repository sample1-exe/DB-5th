// pages/_app.js
import '../styles/style.css'
import 'tailwindcss/tailwind.css';
import Image from 'next/image';


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      
      <Component {...pageProps} />
    </>
  )
}