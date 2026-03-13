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
  options={{
    background: {
      color: {
        value: "#ffffff"
      }
    },
    particles: {
      number: {
        value: 80
      },
      size: {
        value: 3
      },
      move: {
        speed: 1
      },
      links: {
        enable: true,
        distance: 150
      }
    }
  }}
/>

);

}