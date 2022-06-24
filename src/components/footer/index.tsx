import styles from './Footer.module.css';

//Icons
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import Link from 'next/link';
const Footer: React.FC = () => {
  return (
    <div>
      <footer className={styles.container}>
        <div className={styles.icons}>
          <Link href='https://github.com/bancalarisantiago'>
            <a target='_black'>
              <FaGithub className={styles.icon} size={'25px'} />
            </a>
          </Link>
          <Link href='https://www.linkedin.com/in/bancalarisantiago/'>
            <a target='_black'>
              <FaLinkedin className={styles.icon} size={'25px'} />
            </a>
          </Link>
          <Link href='/'>
            <a target='_black'>
              <HiMail className={styles.icon} size={'25px'} />
            </a>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
