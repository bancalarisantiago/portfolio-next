//Components
import Image from 'next/image';
//Styles
import styles from './About.module.css';
//Images
import photo from '../../assets/images/fotoPerfilBN.png';
//Icons
import { GiTechnoHeart } from 'react-icons/gi';
import { BsInfoCircle } from 'react-icons/bs';
import {
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSequelize,
  SiNextdotjs,
  SiChakraui,
  SiExpress,
  SiHtml5,
  SiNodedotjs,
  SiCss3,
  SiTrello,
  SiSlack,
  SiGit,
  SiGithub,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobelightroom,
  SiFigma,
} from 'react-icons/si';
const About: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.meContent}>
            <div className={styles.title}>
              <div>
                <h1>ME</h1>
              </div>
              <div className={styles.icon}>
                <BsInfoCircle />
              </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.photo}>
              <Image
                src={photo}
                layout='fixed'
                width={120}
                height={120}
                alt='profile-photo'
              ></Image>
            </div>
            <p>
              I &apos; m constantly learning and perfecting my skill as a
              developer every day. I enjoy challenges and goals that force me to
              increase my knowledge and skills. I like to create things with
              JavaScript/TypeScript technologies that can help people do their
              chores easier and faster.
            </p>
          </div>
          <div className={styles.technologiesContent}>
            <div className={styles.title}>
              <div>
                <h1>TECHNOLOGIES</h1>
              </div>
              <div className={styles.icon}>
                <GiTechnoHeart />
              </div>
            </div>
            <div className={styles.divider}></div>
            <p>
              I love working on a variety of technologies including Web
              Development, Mobile App Development and Deep Learning. My goal is
              to build highly performant applications that solve real-world
              problems and provide users with an awesome experience.
            </p>
            <div>
              <SiJavascript />
              <SiTypescript />
              <SiPostgresql />
              <SiReact />
              <SiRedux />
              <SiSequelize />
              <SiNextdotjs />
              <SiChakraui />
              <SiExpress />
              <SiHtml5 />
              <SiNodedotjs />
              <SiCss3 />
              <SiTrello />
              <SiSlack />
              <SiGit />
              <SiGithub />
              <SiAdobephotoshop />
              <SiAdobepremierepro />
              <SiAdobeaftereffects />
              <SiAdobelightroom />
              <SiFigma />
              mongoose
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
