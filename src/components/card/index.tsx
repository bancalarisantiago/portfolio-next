import Link from 'next/link';
import Image from 'next/image';
import { BiDownload } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import Rubrit from '../../assets/images/landing.jpg';
import styles from './Card.module.css';

const Card: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <Image
        src={Rubrit}
        alt='project-picture'
        width={300}
        height={150}
      ></Image>
      <h6>RUBRIT - Services App</h6>
      <p>
        Rubrit was born from the need for those people to offer their services
        in an area where formal work is scarce. We seek to provide ease to all
        users who want to offer or hire reliable services.
      </p>
      <div>TECONOLOGIAS</div>
      <p>TypeScript - NextJS - MongoDB - AWS</p>
      <Link href='https://drive.google.com/file/d/18W9rsevgokD0bSujLuE7MUKS_i3Kfnj8/view?usp=sharing'>
        <a target='_blank'>
          <button className={styles.btn}>
            <BiDownload size={'15px'} />
            &nbsp; Deploy
          </button>
        </a>
      </Link>
      <Link href='https://github.com/bancalarisantiago'>
        <a target='_blank'>
          <button className={`${styles.btn} ${styles.btnGithub}`}>
            <FaGithub size={'15px'} />
            &nbsp; Code
          </button>
        </a>
      </Link>
    </div>
  </div>
);

export default Card;
