import { motion } from "framer-motion";
import Velotext from "../components/layout/velotext";
import Particle from "../components/layout/particle";
import particleConfigs from "../config/particle.config";

const Layout = () => {
  return (
    <div className="layout">
      <Particle options={particleConfigs} />
    <div className="flex relative items-center justify-center py-[50%] md:py-[20%] text-[21px] md:text-[47px]">
      <motion.div style={{ textAlign: "center", fontFamily: "fantasy" }}>
        <Velotext text="Hello" delay={1} />
        <Velotext text="World" delay={2} />
        <br />
        <Velotext text="Welcome" delay={3} />
        <Velotext text="To" delay={4} />
        <Velotext text="My" delay={5} />
        <Velotext text="Website" delay={6} />
      </motion.div>
    </div>
    </div>
  );
};

export default Layout;
