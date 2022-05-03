//Framework
import Image from 'next/image';

//Styles
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <>
      <header className={styles.container}>
        <nav className={styles.containerNav}>
          <div>
            <Image
              className={styles.logo}
              layout='fill'
              src={'/src/assets/images/logo.png'}
              alt='logo-saba'
            />
          </div>
          <div>
            <ul className={styles.containerLinks}>
              <div className={styles.containerLi}>
                <li>
                  <a href='#'>HOME</a>
                </li>
              </div>
              <div className={styles.containerLi}>
                <li>
                  <a href='#'>ABOUT ME</a>
                </li>
              </div>
              <div className={styles.containerLi}>
                <li>
                  <a href='#'>PROJECTS</a>
                </li>
              </div>
              <div>
                <button className={styles.btn}>
                  <a href='#'>CONTACT</a>
                </button>
              </div>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
