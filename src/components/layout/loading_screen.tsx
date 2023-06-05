import { motion } from "framer-motion";
import useDeviceDetect from "../../hooks/get_device";

const LoadingScreen = () => {
    const { device } = useDeviceDetect()
    let loading_size: string = device == "Mobile" ? "70" : device == "Desktop" ? "90" : "80"
    const loading_size2 = String(parseInt(loading_size) - 15) + "px"
    loading_size = loading_size + "px"
    
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
          width: loading_size,
          height: loading_size,
          padding: "7px",
          margin: "17vh",
          border:"1px solid #000",
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
          width: loading_size2,
          height: loading_size2,
          border:"1px solid #000",
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