//Assets
import Logo from '../../assets/images/logo.png';
//Framework
import Image from 'next/image';

//Styles
import styles from './Header.module.css';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <div>
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
          <div>
            <ul className={styles.containerLinks}>
              <div className={styles.containerLi}>
                <Link href='/'>
                  <a>Home</a>
                </Link>
              </div>
              <div className={styles.containerLi}>
                <Link href='/about'>
                  <a>About</a>
                </Link>
              </div>
              <div className={styles.containerLi}>
                <li>
                  <Link href='/portfolio'>
                    <a>Portfolio</a>
                  </Link>
                </li>
              </div>
              <div className={styles.containerLi}>
                <li>
                  <Link href='/contact'>
                    <a href='#'>Contact</a>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div></div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
