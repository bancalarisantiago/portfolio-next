import Link from 'next/link';
import Image from 'next/image';
import { BiDownload } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import Rubrit from '../../assets/images/landing.jpg';
import styles from './Card.module.css';
import imageRubrit from '/public/landing.jpg';
interface IProject {
  title: string;
  img: any;
  description: string;
  technologies: string[];
  url: string;
  github: string;
}

const projects: [IProject] = [
  {
    title: 'RUBRIT - Services App',
    img: imageRubrit,
    description:
      'Rubrit was born from the need for those people to offer their services in an area where formal work is scarce. We seek to provide ease to all users who want to offer or hire reliable services.',
    technologies: ['TypeScript', 'NextJS', 'MongoDB', 'AWS'],
    url: 'https://github.com/bancalarisantiago/Rubrit-App',
    github: 'https://github.com/bancalarisantiago/Rubrit-App',
  },
];

const Card: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      {projects.map(
        ({ title, img, description, technologies, url, github }) => (
          <>
            <Image
              src={img}
              alt='project-picture'
              width={300}
              height={150}
            ></Image>
            <h6>{title}</h6>
            <p>{description}</p>
            <div>
              <h5 style={{ margin: 0 }}>TECONOLOGIAS</h5>
              <div className={styles.technologies}>
                {technologies.map((tech) => (
                  <>
                    <h6>{tech}</h6>
                  </>
                ))}
              </div>
            </div>
            <div className={styles.btnContainer}>
              <Link href={url}>
                <a target='_blank'>
                  <button className={styles.btn}>
                    <BiDownload size={'15px'} />
                    &nbsp; Deploy
                  </button>
                </a>
              </Link>
              <Link href={github}>
                <a target='_blank'>
                  <button className={`${styles.btn} ${styles.btnGithub}`}>
                    <FaGithub size={'15px'} />
                    &nbsp; Code
                  </button>
                </a>
              </Link>
            </div>
          </>
        )
      )}
    </div>
  </div>
);

export default Card;
