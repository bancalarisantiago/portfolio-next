import styles from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <form className={styles.form}>
          <div className={styles.group}>
            <input type='text' autoComplete='off' required />
            <label className={styles.labelName}>
              <span className={styles.contentName}>Name</span>
            </label>
          </div>
          <div className={styles.group}>
            <input type='text' autoComplete='off' required />
            <label className={styles.labelName}>
              <span className={styles.contentName}>Company</span>
            </label>
          </div>
          <div className={styles.group}>
            <input type='email' autoComplete='off' required />
            <label className={styles.labelName}>
              <span className={styles.contentName}>Email</span>
            </label>
          </div>
        </form>
      </div>

      {/* <div>
                <input type='text' autoComplete='off' required />
                <label className={styles.labelName}>
                  <span className={styles.contentName}>Name</span>
                </label>
              </div> */}

      {/* <div className={styles.group}>
                <label className={styles.label}>
                  <span> Name</span>
                  <input type='text' className={styles.input} required />
                </label>
              </div>
              <label>
                Company
                <input type='text' />
              </label>
              <label>
                Email
                <input type='email' />
              </label>
              <label>
                Message
                <textarea />
              </label> */}
      {/* <button type='submit'>SEND</button> */}
    </>
  );
};

export default Contact;
