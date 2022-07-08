import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { IoIosSunny } from 'react-icons/io';
import styles from './ToggleDarkMode.module.css';

const useLoaded = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(() => setLoaded(true), []);
  return loaded;
};

const ToggleDarkMode: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const loaded: boolean = useLoaded();

  const toggleDarkMode = (): void => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div>
      <button className={styles.btn} onClick={toggleDarkMode}>
        {loaded && theme !== 'dark' ? (
          <IoIosSunny className={styles.icon} size='20px' />
        ) : (
          <FaMoon className={styles.icon} size='18px' />
        )}
      </button>
    </div>
  );
};

export default ToggleDarkMode;
