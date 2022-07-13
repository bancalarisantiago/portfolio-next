import styles from './Input.module.css';
import { FaPaperPlane, FaCheck, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';

interface IProps {
  type: string;
  name: string;
  onChange: any;
  value: any;
  label: string;
  required?: boolean;
  errorMessage?: string;
}

const FormInput: React.FC<IProps> = (props) => {
  const inputRef = useRef<any>(null);
  function setCustomValidity(event: any) {
    // console.log((inputRef.current.validity.customError = 'EAEA'));
    inputRef.current.setCustomValidity(props.errorMessage);
  }

  return (
    <div
      className={props.type === 'text' ? styles.group : styles.groupTextarea}
    >
      {props.type === 'text' ? (
        <input {...props} ref={inputRef} onFocus={setCustomValidity} />
      ) : (
        <textarea {...props} />
      )}

      <label className={styles.labelName}>
        <span className={styles.contentName}>{props.label}</span>
        {false ? (
          <FaCheck className={styles.icon} />
        ) : (
          <>
            <FaTimes className={styles.icon} />
            <p className={styles.errorMessage}>{props.errorMessage}</p>
          </>
        )}
      </label>
    </div>
  );
};

export default FormInput;
