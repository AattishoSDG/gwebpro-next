"use client";
import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export const ParticleBackground = ({ id }) => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  // const options = useMemo(
  //   () => ({
  //     style: {
  //       position: "absolute",
  //       width: "100%",
  //       height: "100%",
  //       inset: "0",
  //     },
  //     detect_on: "canvas",
  //     background: {
  //       color: {
  //         value: "#0d47a1",
  //       },
  //     },
  //     fpsLimit: 120,
  //     interactivity: {
  //       events: {
  //         onClick: {
  //           enable: true,
  //           mode: "push",
  //         },
  //         onHover: {
  //           enable: true,
  //           mode: "grab",
  //         },
  //       },
  //       modes: {
  //         push: {
  //           quantity: 4,
  //         },
  //         repulse: {
  //           distance: 200,
  //           duration: 0.4,
  //         },
  //       },
  //     },
  //     particles: {
  //       color: {
  //         value: "#ffffff",
  //       },
  //       links: {
  //         color: "#ffffff",
  //         distance: 150,
  //         enable: true,
  //         opacity: 0.5,
  //         width: 1,
  //       },
  //       move: {
  //         direction: "none",
  //         enable: true,
  //         outModes: {
  //           default: "bounce",
  //         },
  //         random: false,
  //         speed: 6,
  //         straight: false,
  //       },
  //       number: {
  //         density: {
  //           enable: true,
  //         },
  //         value: 80,
  //       },
  //       opacity: {
  //         value: 0.5,
  //       },
  //       shape: {
  //         type: "circle",
  //       },
  //       size: {
  //         value: { min: 1, max: 5 },
  //       },
  //     },
  //     detectRetina: true,
  //   }),
  //   []
  // );
  const options = useMemo(
    () => ({
      style: {
        position: "absolute",
        width: "100%",
        height: "100%",
        inset: "0",
      },
      detect_on: "canvas",
      background: {
        color: {
          value: "#0d47a1",
        },
      },
      fpsLimit: 120,
      interactivity: {
        detect_on: "canvas",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          grab: {
            distance: 200,
            line_linked: {
              opacity: 0.7,
            },
          },
          push: {
            quantity: 4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "destroy", // Destroy particles when they go out of canvas
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        // id="tsparticles"
        id={id}
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};
ParticleBackground.propTypes = {
  id: PropTypes.string.isRequired, // The `id` prop is required and should be a string
};
