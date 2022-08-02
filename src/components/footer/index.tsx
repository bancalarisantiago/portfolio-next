import styles from './Footer.module.css';

//Icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { RiWhatsappFill } from 'react-icons/ri';
import Link from 'next/link';
const Footer: React.FC = () => {
  function sendEmail() {
    window.open(
      'mailto:bancalarisantiago@gmail.com?subject=Contact&body=Insert your message'
    );
  }

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
          <HiMail onClick={sendEmail} className={styles.icon} size={'22px'} />
        </div>
        <div>
          <Link href='https://wa.me/5491164557977'>
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
