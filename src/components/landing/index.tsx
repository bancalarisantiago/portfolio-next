//import Illustration from '../../assets/illustrationalanding.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BiDownload } from 'react-icons/bi';
import styles from './Landing.module.css';

import Link from 'next/link';
import { HiMail } from 'react-icons/hi';

const Landing: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>
            &lt;&gt; Hi, I &apos; m <span> SANTIAGO </span>&lt;/&gt;
          </h1>
          <p className={styles.description}>
            &lt;&gt; A passionate <strong> Frontend Developer </strong> and
            <strong> Audiovisual Designer </strong> having an experience of
            building responsive Mobile/Web applications with TypeScript - React - React Native - Expo
            Nodejs and some other cool libraries and frameworks.&lt;/&gt;
          </p>
          <div className={styles.btnContainer}>
            <Link href='https://drive.google.com/file/d/1HXVI-eIuGsgPgoc_dn7_Fq2KPNfZWG7b/view?usp=drive_link'>
              <a target='_blank'>
                <button className={styles.btn}>
                  <BiDownload size={15} />
                  &nbsp; Download<strong> &nbsp; CV</strong>
                </button>
              </a>
            </Link>
            <Link href='https://github.com/bancalarisantiago'>
              <a target='_blank'>
                <button className={`${styles.btn} ${styles.btnGithub}`}>
                  <FaGithub size={15} />
                  &nbsp; Github
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
