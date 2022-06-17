import Image from 'next/image';
//import Illustration from '../../assets/illustrationalanding.png';
import styles from './Landing.module.css';

import ParticlesBackground from '../particlesBackground';

const Landing: React.FC = () => {
  return (
    <>
      <div className={styles.container}></div>
      <ParticlesBackground />
      <p>
        Hi, I ' m SANTIAGO BANCALARI Fullstack Developer A passionate
        Intermediate Full Stack Developer 🚀 having an experience of building
        responsive Web applications with JavaScript / Reactjs / Nodejs and some
        other cool libraries and frameworks.
      </p>
    </>
  );
};

export default Landing;
