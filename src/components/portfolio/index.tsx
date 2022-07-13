import styles from './Portfolio.module.css';
import Card from '../card';

const Portfolio = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>
            <span> PORFTOLIO </span>
          </h1>
          <Card />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
