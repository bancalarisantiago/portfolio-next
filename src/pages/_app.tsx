import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Layout from '../components/layout';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider defaultTheme='system'>
        <Layout activeLink={pathname}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
