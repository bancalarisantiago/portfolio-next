//Styles
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.content}>
            <h1>
              <span> SKILLS </span>
            </h1>
            <p>
              I love working on a variety of technologies including Web
              Development, Mobile App Development and Deep Learning. My goal is
              to build highly performant applications that solve real-world
              problems and provide users with an awesome experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
