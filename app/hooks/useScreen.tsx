import { useEffect, useState } from "react";

export default function useScreen() {
  const [mobileScreen, setMobileScreen] = useState<boolean>(false);
  const [loaderScreen, setLoaderScreen] = useState<boolean>(true);

  const handleResize = () => {
    const isMobile = window.innerWidth < 800;
    setMobileScreen(isMobile);
    setLoaderScreen(false);
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

  return { mobileScreen, loaderScreen };
}
