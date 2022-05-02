//Assets
import HeroBg from '../../assets/images/hero-image.jpg';

//Styles

import styles from './Hero.module.css';
const Hero: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        {/* <img src={HeroBg} alt='hero-image-background'></img> */}
      </div>
    </>
  );
};
export default Hero;
