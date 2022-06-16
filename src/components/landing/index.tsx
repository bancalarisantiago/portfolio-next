import Image from 'next/image';
//import Illustration from '../../assets/illustrationalanding.png';
import styles from './Landing.module.css';
const Landing: React.FC = () => {
  return (
    <>
      {/* <Image src={Illustration} /> */}
      <div className={styles.container}>
        <p>Hi, my name is Santiago Bancalari asdasdasdasdasdsasd </p>
      </div>
    </>
  );
};

export default Landing;
