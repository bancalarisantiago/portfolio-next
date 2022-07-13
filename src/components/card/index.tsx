import Link from 'next/link';
import { BiDownload } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import styles from './Card.module.css';

const Card: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <h6>NOMBRE DEL PROYECTO</h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolores,
        labore sequi eligendi hic sint voluptates omnis tenetur quas laboriosam
        quisquam mollitia minima perspiciatis nesciunt aut voluptatem! Quos,
        nisi obcaecati sequi debitis aliquid ducimus vitae! Laboriosam
        voluptatem totam, sed architecto ipsum, adipisci, eius voluptatibus
        magnam excepturi cum placeat! Neque omnis fugiat magnam eius est, quam
        animi aperiam voluptates dolore tempora.
      </p>
      <div>TECONOLOGIAS</div>
      <Link href='https://drive.google.com/file/d/18W9rsevgokD0bSujLuE7MUKS_i3Kfnj8/view?usp=sharing'>
        <a target='_blank'>
          <button className={styles.btn}>
            <BiDownload size={'15px'} />
            &nbsp; Deploy<strong> &nbsp; CV</strong>
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
