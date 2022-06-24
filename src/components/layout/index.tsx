import Header from '../header';
import Footer from '../footer';
import ParticlesBackground from '../particlesBackground';

interface props {
  children: React.ReactNode;
  activeLink: string;
}

const Layout: React.FC<props> = ({ children, activeLink }) => {
  // document.addEventListener('contextmenu', (event) => {
  //   event.preventDefault();
  // });
  return (
    <>
      <Header activeLink={activeLink} />
      <ParticlesBackground />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
