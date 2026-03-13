import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function Background() {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (

    <Particles
      id="tsparticles"
      init={particlesInit}

      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1
      }}

      options={{
        background: {
          color: {
            value: "#ffffff"
          }
        },
        particles: {
          number: { value: 80 },
          size: { value: 3 },
          move: { speed: 1 },
          links: { enable: true, distance: 150 }
        }
      }}

    />

  );
}