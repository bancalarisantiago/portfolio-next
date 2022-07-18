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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolores,
        labore sequi eligendi hic sint voluptates omnis tenetur quas laboriosam
        quisquam mollitia minima perspiciatis nesciunt aut voluptatem! Quos,
        nisi obcaecati sequi debitis aliquid ducimus vitae!
      </p>
      <div>TECONOLOGIAS</div>
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
