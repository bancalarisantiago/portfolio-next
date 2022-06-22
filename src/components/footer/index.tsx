import styles from './Footer.module.css';

//Icons
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
const Footer: React.FC = () => {
  return (
    <div>
      <footer className={styles.container}>
        <div className={styles.icons}>
          <FaGithub className={styles.icon} size={'25px'} />
          <FaLinkedin className={styles.icon} size={'25px'} />
          <HiMail className={styles.icon} size={'25px'} />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
