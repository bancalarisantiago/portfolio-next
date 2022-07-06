import { useEffect, useRef } from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const textarea = useRef<any>(null);

  function handleInputOnChange(event: any) {
    console.log(textarea);
  }

  function handleOnSubmit(event: any) {
    event.preventDefault();
  }
  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleOnSubmit}>
          <div className={styles.group}>
            <input
              type='text'
              autoComplete='off'
              onChange={handleInputOnChange}
              required
            />
            <label className={styles.labelName}>
              <span className={styles.contentName}>Name</span>
            </label>
          </div>
          <div className={styles.group}>
            <input
              type='text'
              autoComplete='off'
              onChange={handleInputOnChange}
              required
            />
            <label className={styles.labelName}>
              <span className={styles.contentName}>Company</span>
            </label>
          </div>
          <div className={styles.group}>
            <input
              type='text'
              autoComplete='off'
              onChange={handleInputOnChange}
              required
            />
            <label className={styles.labelName}>
              <span className={styles.contentName}>Email</span>
            </label>
          </div>
          {/* <div className={styles.group}>
            <textarea
              className={styles.textarea}
              onChange={handleInputOnChange}
              ref={textarea}
              rows={40}
              cols={40}
            ></textarea>
            <label className={styles.labelName}>
              <span className={styles.contentName}>Message</span>
            </label>
          </div> */}
          <div className={styles.group}>
            <textarea
              autoComplete='off'
              onChange={handleInputOnChange}
              placeholder={'Enter your message'}
              required
            ></textarea>
            <label className={styles.labelName}>
              <span className={styles.contentName}>Message</span>
            </label>
          </div>
          <button type='submit'>SEND</button>
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
    </>
  );
};

export default Contact;
