import { useTheme } from 'next-themes';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground: React.FC = () => {
  const { theme } = useTheme();
  const background = theme === 'dark' ? '#0d1117' : '#555';
  const particlesColor = theme === 'dark' ? '#ffd90f' : '#1c81ff';

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <>
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
            // color: {
            //   value: '#1C81FF',
            // },
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
              color: `${particlesColor}`,
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
