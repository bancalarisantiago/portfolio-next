//Assets
import Logo from '../../assets/images/logo.png';
//Framework
import Image from 'next/image';
//Component
import LogIn from '../login';
import ToggleDarkMode from '../toggleDarkMode';
//Styles
import styles from './Header.module.css';
import Link from 'next/link';
import { useState } from 'react';
import Modal from '../modal';
//Icons
import { FaHome, FaMoon, FaSun } from 'react-icons/fa';
import { BsInfoSquareFill } from 'react-icons/bs';
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
        <div className={styles.logo}>
          <Link href='/'>
            <a>
              <h1>SB</h1>
            </a>
          </Link>
        </div>
        <div className={styles.containerLinks}>
          <div className={styles.containerLi}>
            <Link href='/'>
              <a
                className={
                  activeLink === '/' ? `${styles.active} ${styles.a}` : styles.a
                }
              >
                {/* <FaHome className={styles.icon} /> */}
                HOME
              </a>
            </Link>
          </div>
          <div className={styles.containerLi}>
            <Link href='/about'>
              <a
                className={
                  activeLink === '/about'
                    ? `${styles.active} ${styles.a}`
                    : styles.a
                }
              >
                {/* <BsInfoSquareFill className={styles.icon} size={15} /> */}
                ABOUT
              </a>
            </Link>
          </div>
          <div className={styles.containerLi}>
            <Link href='/portfolio'>
              <a
                className={
                  activeLink === '/portfolio'
                    ? `${styles.active} ${styles.a}`
                    : styles.a
                }
              >
                PROJECTS
              </a>
            </Link>
          </div>
          <div className={styles.containerLi}>
            <Link href='/contact'>
              <a
                className={
                  activeLink === '/contact'
                    ? `${styles.active} ${styles.a}`
                    : styles.a
                }
              >
                CONTACT
              </a>
            </Link>
          </div>
        </div>

        <div className={styles.btnLogin}>
          {/* <button className={styles.btn} id='menu_btn' onClick={toggleModal}>
            LOGIN
          </button> */}
          <ToggleDarkMode />
        </div>
      </nav>
      <Modal show={showModal} onClose={setShowModal} title={'Testing'}>
        <LogIn />
      </Modal>
    </header>
  );
};

export default Header;
