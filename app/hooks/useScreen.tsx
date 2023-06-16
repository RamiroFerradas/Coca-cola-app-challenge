import { useEffect, useState } from "react";

export default function useScreen() {
  const [mobileScreen, setMobileScreen] = useState<boolean>(false);

  const handleResize = () => {
    const isMobile = window.innerWidth < 1200;
    setMobileScreen(isMobile);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      handleResize();

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return { mobileScreen };
}
