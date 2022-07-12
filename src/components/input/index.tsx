import styles from './Input.module.css';
import { FaPaperPlane, FaCheck, FaTimes } from 'react-icons/fa';

interface IProps {
  type: string;
  name: string;
  onChange: any;
  value: any;
  label: string;
  errorMessage: string;
}

const FormInput: React.FC<IProps> = (props) => {
  return (
    <div
      className={props.type === 'text' ? styles.group : styles.groupTextarea}
    >
      {props.type === 'text' ? (
        <input {...props} required />
      ) : (
        <textarea {...props} required />
      )}

      <label className={styles.labelName}>
        <span className={styles.contentName}>{props.label}</span>
        {false ? (
          <FaCheck className={styles.icon} />
        ) : (
          <>
            <FaTimes className={styles.icon} />
            {/* <span className={styles.errorMessage}>{props.errorMessage}</span> */}
          </>
        )}
      </label>
    </div>
  );
};

export default FormInput;
