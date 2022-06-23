import styles from './LogIn.module.css';
import { signOut, signIn, useSession } from 'next-auth/react';

const LogIn: React.FC = () => {
  const { data: session, status } = useSession();
  const user = session?.user;
  console.log('session', user);
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
            {!user && (
              <button className={styles.btn} onClick={() => signIn('GitHub')}>
                Sign In
              </button>
            )}
            {user && (
              <button className={styles.btn} onClick={() => signOut()}>
                Sign Out
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
