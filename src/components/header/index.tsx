//Assets
import Logo from '../../assets/images/logo.png';
//Framework
import Image from 'next/image';

//Styles
import styles from './Header.module.css';
import Link from 'next/link';

interface Props {
  activeLink?: string;
}

const Header: React.FC<Props> = ({ activeLink }) => {
  console.log('header', activeLink);
  return (
    <header className={styles.container}>
      <nav className={styles.containerNav}>
        {/* <div>
            <Image
              className={styles.logo}
              layout='fixed'
              width={200}
              height={100}
              src={Logo}
              alt='logo-saba'
            />
          </div> */}
        <div className={styles.containerLinks}>
          <div className={styles.containerLi}>
            <Link href='/'>
              <a className={activeLink === '/' ? styles.active : ''}>Home</a>
            </Link>
          </div>
          <div className={styles.containerLi}>
            <Link href='/about'>
              <a className={activeLink === '/about' ? styles.active : ''}>
                About
              </a>
            </Link>
          </div>
          <div className={styles.containerLi}>
            <Link href='/portfolio'>
              <a className={activeLink === '/portfolio' ? styles.active : ''}>
                Portfolio
              </a>
            </Link>
          </div>
          <div className={styles.containerLi}>
            <Link href='/contact'>
              <a className={activeLink === '/contact' ? styles.active : ''}>
                Contact
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.btnLogin}>
          <button>LOGIN</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
