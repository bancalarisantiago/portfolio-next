import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Layout from '../components/layout';
function MyApp({ Component, pageProps }: AppProps) {
  const path = useRouter();

  return (
    <Layout activeLink={path.pathname}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
