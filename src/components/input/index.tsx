import styles from './Input.module.css';
import { FaPaperPlane, FaCheck, FaTimes } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

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
  return (
    <div
      className={props.type === 'text' ? styles.group : styles.groupTextarea}
    >
      {props.type === 'text' ? <input {...props} /> : <textarea {...props} />}

      <label className={styles.labelName}>
        <span className={styles.contentName}>{props.label}</span>
        {false ? (
          <FaCheck className={styles.icon} />
        ) : (
          <FaTimes className={styles.icon} />
        )}
      </label>
    </div>
  );
};

export default FormInput;
