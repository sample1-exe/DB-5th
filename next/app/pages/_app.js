// pages/_app.js
import '../styles/style.css'
import 'tailwindcss/tailwind.css';
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}