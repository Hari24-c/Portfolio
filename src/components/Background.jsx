import Particles from "react-tsparticles";

export default function Background() {
  return (
    <Particles
      options={{
        particles: {
          number: { value: 80 },
          size: { value: 3 },
          move: { speed: 1 },
          links: { enable: true }
        }
      }}
    />
  );
}