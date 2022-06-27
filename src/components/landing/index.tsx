//import Illustration from '../../assets/illustrationalanding.png';
import { FaGithub } from 'react-icons/fa';
import { BiDownload } from 'react-icons/bi';
import styles from './Landing.module.css';

import Link from 'next/link';

const Landing: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          {/* <h1>
            Hi, I &apos; m <span> SANTIAGO </span>
          </h1>
          <p>
            A passionate <strong>Full Stack Developer</strong> and
            <strong>Audiovisual Designer</strong> having an experience of
            building responsive Web applications with JavaScript / Reactjs /
            Nodejs and some other cool libraries and frameworks.
          </p> */}
          <div className={styles.btnContainer}>
            <Link href='https://drive.google.com/file/d/18W9rsevgokD0bSujLuE7MUKS_i3Kfnj8/view?usp=sharing'>
              <a target='_blank'>
                <button className={styles.btn}>
                  <BiDownload size={'15px'} />
                  &nbsp; Download<strong> &nbsp; CV</strong>
                </button>
              </a>
            </Link>
            <Link href='https://github.com/bancalarisantiago'>
              <a target='_blank'>
                <button className={`${styles.btn} ${styles.btnGithub}`}>
                  <FaGithub size={'15px'} />
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
