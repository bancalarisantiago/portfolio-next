import { useTheme } from 'next-themes';
import { useRef, useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import styles from './particlesBackground.module.css';
const ParticlesBackground: React.FC = (props) => {
  const { theme } = useTheme();
  const background = theme === 'dark' ? '#0d1117' : '#d8dde6';
  const particlesColor = theme === 'dark' ? '#f7df1e' : '#2d79c7';
  const color: any = useRef();
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };
  // useEffect(() => {
  //   console.log(
  //     getComputedStyle(color.current).getPropertyValue('--color-primary')
  //   );
  // }, [color]);

  return (
    <>
      <div className={styles.test} ref={color}></div>
      <Particles
        id='tsparticles'
        init={particlesInit}
        options={{
          background: {
            color: {
              value: `${background}`,
            },
          },
          fpsLimit: 60,

          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 600,
              },
            },

            shape: {
              type: 'circle',
              stroke: {
                width: 2,
                color: `${particlesColor}`,
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 0.3,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 20,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: `${particlesColor}`,
              opacity: 0.2,
              width: 2,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'grab',
              },
              onclick: {
                enable: true,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 150,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 200,
                duration: 2,
                opacity: 8,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </>
  );
};

export default ParticlesBackground;
