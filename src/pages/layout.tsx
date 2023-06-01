import { motion } from "framer-motion";
import Velotext from "../components/layout/velotext";
import Particle from "../components/layout/particle";
import particleConfigs from "../config/particle.config";
import LoadingScreen from "../components/layout/loading_screen";

const Layout = () => {
  return (
      <div className="flex relative items-center justify-center px-6 py-[30%] md:py-[15%] text-[21px] md:text-[36px]">
      <Particle options={particleConfigs} />
        <motion.div style={{ textAlign: "center", fontFamily: "fantasy" }}>
          <Velotext text="Hello" delay={1} />
          <Velotext text="World" delay={2} />
          <br />
          <Velotext text="Welcome" delay={3} />
          <Velotext text="To" delay={4} />
          <Velotext text="My" delay={5} />
          <Velotext text="Website" delay={6} />
          <LoadingScreen />
        </motion.div>
      </div>

  );
};

export default Layout;
