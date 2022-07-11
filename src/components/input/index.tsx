import styles from './Input.module.css';
import { FaPaperPlane, FaCheck, FaTimes } from 'react-icons/fa';

interface IProps {
  refer?: any;
  name: string;
  type: string;
}

const FormInput: React.FC<IProps> = ({ refer, name, type }) => {
  return (
    <div className={type === 'text' ? styles.group : styles.groupTextarea}>
      {type === 'text' ? (
        <input
          type={type}
          name={name}
          autoComplete='nope'
          ref={refer}
          required
        />
      ) : (
        <textarea name={name} autoComplete='nope' ref={refer} required />
      )}

      <label className={styles.labelName}>
        <span className={styles.contentName}>{name}</span>
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
