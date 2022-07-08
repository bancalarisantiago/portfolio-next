import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import Image from 'next/image';
import Close from '../../assets/svg/close-circle_8.svg';
interface IModal {
  show: boolean;
  onClose: any;
  children: any;
  title: string;
}

const Modal: React.FC<IModal> = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState<boolean>(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <button className={styles.btn} onClick={handleClose}>
            <Image
              className={styles.svg}
              src={Close}
              width={'25'}
              height={'25'}
              alt={'close-button'}
            />
          </button>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root') as HTMLElement
    );
  } else {
    return null;
  }
};

export default Modal;
