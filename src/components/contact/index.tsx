import styles from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>
            <span> CONTACT </span>
          </h1>
          <div>
            <form>
              <input type='text'></input>
              <input type='text'></input>
              <input type='mail'></input>
              <button type='submit'>SEND</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
