import { useState, useEffect } from "react";
import { isDesktop, isIPad13, isTablet, isMobile } from "react-device-detect";

const useDeviceDetect = () => {
  const [device, setDevice] = useState("Desktop");

  useEffect(() => {
    if (isMobile && !isIPad13) {
      setDevice("Mobile");
    } else if (isIPad13 || isTablet) {
      setDevice("Desktop");
    } else if (isDesktop) {
      setDevice("Desktop");
    }
  }, []);

  return { device };
};

export default useDeviceDetect;
