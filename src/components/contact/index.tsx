import FormInput from '../input';

import { useEffect, useRef, useState } from 'react';
import styles from './Contact.module.css';

//Icons
import { FaPaperPlane, FaCheck, FaTimes } from 'react-icons/fa';

interface Input {
  id: number;
  name: string;
  type: string;
  label: string;
  errorMessage?: string;
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
  // const inputName = useRef<HTMLInputElement>();
  // const inputCompany = useRef<HTMLInputElement>();
  // const inputEmail = useRef<HTMLInputElement>();
  // const inputMessage = useRef<HTMLTextAreaElement>();

  const [form, setForm] = useState<any>({
    fullName: '',
    company: '',
    email: '',
    message: '',
  });

  const inputs: Input[] = [
    {
      id: 1,
      name: 'fullName',
      label: 'Full Name',
      type: 'text',
      errorMessage: `Full name should be 3-16 characters and should't use special characters`,
    },
    {
      id: 2,
      name: 'company',
      label: 'Company',
      type: 'text',
      errorMessage: 'Company should should be 3-16 characters',
    },
    {
      id: 3,
      name: 'email',
      label: 'Email',
      type: 'text',
      errorMessage: 'It should be a valid email address!',
    },
    {
      id: 4,
      name: 'message',
      label: 'Message',
      type: 'textarea',
      errorMessage:
        'Min characters for message should be more than 20 characters',
    },
  ];
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

  function handleInputOnChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const { value, name } = event.target;

    setForm({ ...form, [name]: value });
    // setValidation({ ...validation, [name]: { error: '', valid: true } });
  }

  function handleOnSubmit(event: any) {
    event.preventDefault();
  }

  console.log(form);

  return (
    <>
      <div className={styles.container}>
        <form
          className={styles.form}
          onSubmit={handleOnSubmit}
          autoComplete='nope'
        >
          <div className={styles.title}>
            <h1>
              <span> Contact Me</span>
            </h1>
          </div>
          {inputs.map((input) => (
            <FormInput
              {...input}
              key={input.id}
              value={form[input.name]}
              onChange={handleInputOnChange}
            />
          ))}
          <button>SUBMIT</button>
        </form>
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
    </>
  );
};

export default Contact;
