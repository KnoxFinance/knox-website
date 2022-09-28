import '../styles/globals.css'
import Layout from '../components/Layout'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {



    AOS.init();
  }, [])

  return (
    <Layout >
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
