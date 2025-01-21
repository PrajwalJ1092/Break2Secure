import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fullScreen: { enable: false }, // This is the key change
      background: {
        color: {
          value: "#335D5B",
        },
      },
      fpsLimit: 75,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onClick: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 5,
          },
          repulse: {
            distance: 150,
            duration: 0.5,
          },
        },
      },
      particles: {
        color: {
          value: ["#5a2a27", "#344e41", "#dda15e", "#fefae0"],
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 200,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 4 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="h-full " // Added to ensure particles fill container
      />
    );
  }

  return <></>;
};

export default ParticlesBackground;
