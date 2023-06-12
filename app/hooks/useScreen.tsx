"use client";
import { useLayoutEffect, useState } from "react";

function useScreen() {
  const [mobileScreen, setMobileScreen] = useState(false);

  const handleResize = () => {
    const isMobile = window.innerWidth < 1200;
    setMobileScreen(isMobile);
  };

  useLayoutEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { mobileScreen };
}

export default useScreen;
