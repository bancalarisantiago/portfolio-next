import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Layout from '../components/layout';
import { SessionProvider } from 'next-auth/react';
import Loading from '../components/loading';
import { useEffect, useRef } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <SessionProvider session={pageProps.session}>
      <Layout activeLink={pathname}>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
