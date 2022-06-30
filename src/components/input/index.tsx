import styles from './Input.module.css';

const Input = () => {
  return (
    <div>
      <input type='text' autoComplete='off' required />
      <label className={styles.labelName}>
        <span className={styles.contentName}>Name</span>
      </label>
    </div>
  );
};
