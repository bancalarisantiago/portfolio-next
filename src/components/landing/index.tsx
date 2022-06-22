import Image from 'next/image';
//import Illustration from '../../assets/illustrationalanding.png';
import { FaGithub } from 'react-icons/fa';
import { BiDownload } from 'react-icons/bi';
import styles from './Landing.module.css';

import ParticlesBackground from '../particlesBackground';

const Landing: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <ParticlesBackground />
        <div className={styles.title}>
          <h1>
            Hi, I &apos; m <span> SANTIAGO </span>
          </h1>
          <p>
            A passionate <strong>Full Stack Developer</strong> and{' '}
            <strong>Audiovisual Designer</strong> having an experience of
            building responsive Web applications with JavaScript / Reactjs /
            Nodejs and some other cool libraries and frameworks.
          </p>
          <div className={styles.btnCotainer}>
            <button className={styles.btn}>
              {' '}
              <BiDownload size={'15px'} />
              &nbsp; Download<strong> &nbsp; CV</strong>
            </button>
            <button className={`${styles.btn} ${styles.btnGithub}`}>
              <FaGithub size={'15px'} />
              &nbsp; Github
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
