import styles from './Input.module.css';
import { FaPaperPlane, FaCheck, FaTimes } from 'react-icons/fa';

interface IProps {
  refer?: any;
  type: string;
  placeholder: string;
}

const FormInput: React.FC<IProps> = ({ refer, placeholder, type }) => {
  return (
    <div className={type === 'text' ? styles.group : styles.groupTextarea}>
      {type === 'text' ? (
        <input type={type} autoComplete='nope' ref={refer} required />
      ) : (
        <textarea autoComplete='nope' ref={refer} required />
      )}

      <label className={styles.labelName}>
        <span className={styles.contentName}>{placeholder}</span>
        {true ? (
          <FaCheck className={styles.icon} />
        ) : (
          <FaTimes className={styles.icon} />
        )}
      </label>
    </div>
  );
};

export default FormInput;
