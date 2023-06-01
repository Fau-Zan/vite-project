import Particles from "react-tsparticles";
import { useCallback } from "react";
import type { Container, Engine, ISourceOptions } from "tsparticles-engine";
import { loadFull } from "tsparticles";

interface Iprops {
  options: ISourceOptions;
}

export default function Particle(props: Iprops) {
  const { options } = props;
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);
  return <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={options} />;
}
