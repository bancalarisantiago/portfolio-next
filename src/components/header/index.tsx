//Assets
import Logo from '../../assets/images/logo.png';
//Framework
import Image from 'next/image';
//Component
import LogIn from '../login';

//Styles
import styles from './Header.module.css';
import Link from 'next/link';
import { useState } from 'react';
import Modal from '../modal';
//Icons
import Home from '../../assets/icons/home.png';
interface Props {
  activeLink?: string;
}

const Header: React.FC<Props> = ({ activeLink }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowModal((modal) => !modal);
  };

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
              <a className={activeLink === '/' ? styles.active : ''}>HOME</a>
            </Link>
          </div>
          <div className={styles.containerLi}>
            <Link href='/about'>
              <a className={activeLink === '/about' ? styles.active : ''}>
                ABOUT
              </a>
            </Link>
          </div>
          <div className={styles.containerLi}>
            <Link href='/portfolio'>
              <a className={activeLink === '/portfolio' ? styles.active : ''}>
                PROJECTS
              </a>
            </Link>
          </div>
          <div className={styles.containerLi}>
            <Link href='/contact'>
              <a className={activeLink === '/contact' ? styles.active : ''}>
                CONTACT
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.btnLogin}>
          <button className={styles.btn} onClick={toggleModal}>
            LOGIN
          </button>
        </div>
      </nav>
      <Modal show={showModal} onClose={setShowModal} title={'Testing'}>
        <LogIn />
      </Modal>
    </header>
  );
};

export default Header;
