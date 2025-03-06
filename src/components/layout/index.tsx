import Header from '../header';
import Footer from '../footer';
import ParticlesBackground from '../particlesBackground';
import { useEffect, useState } from 'react';
import styles from './Layout.module.css';
import { useTheme } from 'next-themes';
import Head from 'next/head';

interface props {
  children: React.ReactNode;
  activeLink: string;
}

const useLoaded = (): boolean => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  return loaded;
};

const Layout: React.FC<props> = ({ children, activeLink }) => {
  // document.addEventListener('contextmenu', (event) => {
  //   event.preventDefault();
  // });
  const loaded = useLoaded();
  const { theme } = useTheme();
  useEffect(()=>{},[theme])
  return (
    <>
      <Head>
        <title>S.B. Portfolio</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className={styles.container}>
        {!loaded ? (
          <div>LOADING</div>
        ) : (
          <>
            <Header activeLink={activeLink} />
            <ParticlesBackground theme={theme} />
            {children}
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default Layout;
