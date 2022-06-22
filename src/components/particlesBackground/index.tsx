import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import styles from './particlesBackground.module.css';
const ParticlesBackground: React.FC = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <>
      <Particles
        id='tsparticles'
        init={particlesInit}
        options={{
          fpsLimit: 60,
          background: {
            color: {
              value: '#0d1117',
            },
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#1C81FF',
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 2,
                color: '#ffd90f',
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
              value: 2,
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
              color: '#ffd90f',
              opacity: 0.2,
              width: 1,
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
