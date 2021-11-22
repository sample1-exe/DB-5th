// pages/_app.js
import '../styles/style.css'
import 'tailwindcss/tailwind.css';
import '../image/sangikousen.png'
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="grid-cols-12 header">
        <div className="fontColor">
          <div className="text-5xl">AIスマート工学コース</div>
        </div> 
      </div>
      <Component {...pageProps} />
    </>
  )
}