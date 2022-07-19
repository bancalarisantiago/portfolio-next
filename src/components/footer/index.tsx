import styles from './Footer.module.css';

//Icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { RiWhatsappFill } from 'react-icons/ri';
import Link from 'next/link';
const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <div>
        <span>
          Developed by: <strong>Santiago Bancalari</strong>
        </span>
      </div>
      <div>
        <span>
          Copyright <strong>©</strong> 2022
        </span>
      </div>
      <div className={styles.icons}>
        <div>
          <Link href='https://github.com/bancalarisantiago'>
            <a target='_black'>
              <FaGithub className={styles.icon} size={'20px'} />
            </a>
          </Link>
        </div>
        <div>
          <Link href='https://www.linkedin.com/in/bancalarisantiago/'>
            <a target='_black'>
              <FaLinkedin className={styles.icon} size={'20px'} />
            </a>
          </Link>
        </div>
        <div>
          <Link href='/'>
            <a target='_black'>
              <HiMail className={styles.icon} size={'22px'} />
            </a>
          </Link>
        </div>
        <div>
          <Link href='/'>
            <a target='_black'>
              <RiWhatsappFill className={styles.icon} size={'20px'} />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
