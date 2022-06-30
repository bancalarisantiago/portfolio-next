import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';
import styles from './ToggleDarkMode.module.css';

const ToggleDarkMode: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleDarkMode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div>
      <button className={styles.btn} onClick={toggleDarkMode}>
        {theme === 'dark' ? (
          <FaMoon className={styles.icon} size='18px' />
        ) : (
          <FaSun className={styles.icon} size='18px' />
        )}
      </button>
    </div>
  );
};

export default ToggleDarkMode;
