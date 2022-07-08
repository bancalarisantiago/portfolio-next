import Header from '../header';
import Footer from '../footer';
import ParticlesBackground from '../particlesBackground';
import { useEffect, useState } from 'react';
import styles from './Layout.module.css';
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

  return (
    <>
      <div className={styles.container}>
        {!loaded ? (
          <div>LOADING</div>
        ) : (
          <>
            <Header activeLink={activeLink} />
            <ParticlesBackground />
            {children}
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default Layout;
