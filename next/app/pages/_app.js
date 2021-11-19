// pages/_app.js
import '../styles/style.css'
import 'tailwindcss/tailwind.css';
import '../image/sangikousen.png'
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <div class="header" className="grid-cols-12">
        <div class="fontColor">
          <div className="text-5xl">AIスマート工学コース</div>
        </div> 
      </div>
      <Component {...pageProps} />
    </>
  )
}