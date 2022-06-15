import styles from './LogIn.module.css';

const LogIn: React.FC = () => {
  return (
    <div className={styles.containerModal}>
      <form>
        <div className={styles.form}>
          <div>
            <p>Log In</p>
          </div>
          <div>
            <label>
              <input type='text' placeholder='Your username'></input>
            </label>
          </div>
          <div>
            <label>
              <input type='text' placeholder='Your password'></input>
            </label>
          </div>
          <div>
            <button className={styles.btn}>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogIn;