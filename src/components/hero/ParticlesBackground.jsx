import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "transparent",
        },

        fpsLimit: 60,

        particles: {
          color: {
            value: "#7c55cb",
          },

          links: {
            color: "#8d448f",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
          },

          number: {
            value: 40,
          },

          opacity: {
            value: 0.3,
          },

          size: {
            value: 2,
          },
        },

        detectRetina: true,
      }}
      className="absolute inset-0"
    />
  );
}

export default ParticlesBackground;