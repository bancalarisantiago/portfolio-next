import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Layout from '../components/layout';
import { SessionProvider } from 'next-auth/react';
import { useSession } from 'next-auth/react';
function MyApp({ Component, pageProps }: AppProps) {
  const path = useRouter();

  return (
    <SessionProvider session={pageProps.session}>
      <Layout activeLink={path.pathname}>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
