//Styles
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>
            Hi, I &apos; m <span> SANTIAGO </span>
          </h1>
          <p>
            A passionate <strong>Full Stack Developer</strong> and
            <strong>Audiovisual Designer</strong> having an experience of
            building responsive Web applications with JavaScript / Reactjs /
            Nodejs and some other cool libraries and frameworks.
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
