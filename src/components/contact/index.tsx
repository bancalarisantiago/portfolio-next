import FormInput from '../input';

import { useEffect, useRef, useState } from 'react';
import styles from './Contact.module.css';

//Icons
import { FaPaperPlane, FaCheck, FaTimes } from 'react-icons/fa';

interface IForm {
  fullName: string;
  company: string;
  email: string;
  message: string;
}

interface IValidation {
  fullName: {
    error: string;
    valid: boolean;
  };
  company: {
    error: string;
    valid: boolean;
  };
  email: {
    error: string;
    valid: boolean;
  };
  message: {
    error: string;
    valid: boolean;
  };
}

const Contact: React.FC = () => {
  const formRef = useRef<any>(null);
  const inputName = useRef<HTMLInputElement>();
  const inputCompany = useRef<HTMLInputElement>();
  const inputEmail = useRef<HTMLInputElement>();
  const inputMessage = useRef<HTMLTextAreaElement>();

  // const [form, setForm] = useState<IForm>({
  //   fullName: '',
  //   company: '',
  //   email: '',
  //   message: '',
  // });

  // const [validation, setValidation] = useState<IValidation>({
  //   fullName: {
  //     error: '',
  //     valid: false,
  //   },
  //   company: {
  //     error: '',
  //     valid: false,
  //   },
  //   email: {
  //     error: '',
  //     valid: false,
  //   },
  //   message: {
  //     error: '',
  //     valid: false,
  //   },
  // });

  // function handleInputOnChange(
  //   event:
  //     | React.ChangeEvent<HTMLInputElement>
  //     | React.ChangeEvent<HTMLTextAreaElement>
  // ) {
  //   const { value, name } = event.target;
  //   if (value) {
  //     setForm({ ...form, [name]: value });
  //     setValidation({ ...validation, [name]: { error: '', valid: true } });
  //   }
  // }

  function handleOnSubmit(event: any) {
    event.preventDefault();

    const data = new FormData(event.target);

    console.log(Object.fromEntries(data.entries()));
  }

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
          <FormInput
            name='fullname'
            placeholder={'Full name'}
            type={'text'}
            refer={inputName}
          />
          <FormInput
            name='company'
            placeholder={'Company'}
            type={'text'}
            refer={inputCompany}
          />
          <FormInput
            name='email'
            placeholder={'Email'}
            type={'text'}
            refer={inputEmail}
          />
          <FormInput
            name='message'
            placeholder={'Message'}
            type={'textarea'}
            refer={inputMessage}
          />
          <button>SUBMIT</button>
        </form>

        {/* 
          <div className={styles.group}>
            <input
              type='text'
              name='fullName'
              autoComplete='nope'
              onChange={handleInputOnChange}
              ref={inputRef}
              required
            />
            <label className={styles.labelName}>
              <span className={styles.contentName}>Full name</span>
              {validation.fullName.valid ? (
                <FaCheck className={styles.icon} />
              ) : (
                <FaTimes className={styles.icon} />
              )}
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
              {validation.company.valid ? (
                <FaCheck className={styles.icon} />
              ) : (
                <FaTimes className={styles.icon} />
              )}
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
              {validation.email.valid ? (
                <FaCheck className={styles.icon} />
              ) : (
                <FaTimes className={styles.icon} />
              )}
            </label>
          </div>
          <div className={styles.groupTextarea}>
            <textarea
              name='message'
              onChange={handleInputOnChange}
              autoComplete='nope'
              required
            ></textarea>
            <label className={styles.labelName}>
              <span className={styles.contentName}>Message</span>
              {validation.message.valid ? (
                <FaCheck className={styles.icon} />
              ) : (
                <FaTimes className={styles.icon} />
              )}
            </label>
          </div>
          */}

        {/* <div className={styles.btnContainer}>
          <button className={styles.btnForm} type='submit'>
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
        </div> */}
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
