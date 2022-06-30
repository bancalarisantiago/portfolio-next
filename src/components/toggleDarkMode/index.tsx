import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import styles from './ToggleDarkMode.module.css';

const useLoaded = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  return loaded;
};

const ToggleDarkMode: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const loaded = useLoaded();

  const toggleDarkMode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div>
      <button className={styles.btn} onClick={toggleDarkMode}>
        {loaded && theme !== 'dark' ? (
          <FaSun className={styles.icon} size='18px' />
        ) : (
          <FaMoon className={styles.icon} size='18px' />
        )}
      </button>
    </div>
  );
};

export default ToggleDarkMode;
