//Components
import Header from '../header';
import Footer from '../footer';

import styles from './Layout.module.css';

const Home: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />

        <Footer />
      </div>
    </>
  );
};
export default Home;
