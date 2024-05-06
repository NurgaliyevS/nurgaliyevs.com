"use client";

import { useEffect, useState } from "react";

function useDeviceType() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const breakpoint = 622;

    const checkDeviceType = () => {
      const isMobile = window.innerWidth < breakpoint;
      setIsMobile(isMobile);
    };

    checkDeviceType();
    window.addEventListener("resize", checkDeviceType);

    return () => {
      window.removeEventListener("resize", checkDeviceType);
    };
  }, []);

  return isMobile;
}

export default useDeviceType;
