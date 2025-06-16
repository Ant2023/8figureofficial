import '@/styles/globals.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return <Component {...pageProps} />;
}
