import { motion } from "framer-motion";

const Velotext = (props: { delay: number; text: string }) => {
  return (
    <motion.span style={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: props.delay, duration: 2 }}>
      {" "}
      {props.text}{" "}
    </motion.span>
  );
};

export default Velotext;
