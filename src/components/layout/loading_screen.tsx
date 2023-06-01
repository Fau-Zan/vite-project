import { motion } from "framer-motion";
import React from "react";

const LoadingScreen = () => {
  return (
    <motion.div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        style={{
          width: 70,
          height: 70,
          padding: "7px",
          margin: "17vh",
          border: "1px solid #000",
          borderRadius: "50%",
          borderTopColor: "transparent",
          backgroundColor: "transparent",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        style={{
          position: "absolute",
          width: 55,
          height: 55,
          border: "1px solid #000",
          borderRadius: "50%",
          borderTopColor: "transparent",
          backgroundColor: "transparent",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
};

export default LoadingScreen;
