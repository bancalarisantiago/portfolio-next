import { useEffect, useRef, useState } from 'react';
import styles from './Contact.module.css';

//Icons
import { FaPaperPlane } from 'react-icons/fa';
interface IForm {
  name: string;
  company: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState<IForm>({
    name: '',
    company: '',
    email: '',
    message: '',
  });

  function handleInputOnChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const { value, name } = event.target;
    if (value) {
      setForm({ ...form, [name]: value });
    }
  }

  function handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  console.log(form);
  return (
    <>
      <div className={styles.container}>
        <form
          className={styles.form}
          onSubmit={handleOnSubmit}
          ref={formRef}
          autoComplete='nope'
        >
          <div className={styles.title}>
            <h1>
              <span> Contact Me</span>
            </h1>
          </div>
          <div className={styles.group}>
            <input
              type='text'
              name='name'
              autoComplete='nope'
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
              name='company'
              autoComplete='nope'
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
              name='email'
              autoComplete='nope'
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
          <div className={styles.groupTextarea}>
            <textarea
              name='message'
              onChange={handleInputOnChange}
              autoComplete='nope'
              required
            ></textarea>
            <label className={styles.labelName}>
              <span className={styles.contentName}>Message</span>
            </label>
          </div>
          {/* <div>
            <button className={styles.btn} type='submit'>
              <FaPaperPlane size={'15px'}></FaPaperPlane>
              <h3>SEND</h3>
            </button>
          </div> */}
          <div className={styles.btnContainer}>
            <button className={styles.btnForm} value='submit' type='submit'>
              <div className={styles.svgWrapper}>
                <div className='svg-wrapper'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    width='24'
                    height='24'
                  >
                    <path fill='none' d='M0 0h24v24H0z'></path>
                    <path
                      fill='currentColor'
                      d='M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z'
                    ></path>
                  </svg>
                </div>
              </div>

              <label>
                <span>SEND</span>
              </label>
            </button>
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
    </>
  );
};

export default Contact;
