"use client";

import { useLayoutEffect, useState } from "react";

type Props = {};
function useScreen() {
  const [mobileScreen, setMobileScreen] = useState(false);

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  useLayoutEffect(() => {
    if (!isMobile) {
      setMobileScreen(false);
    } else {
      setMobileScreen(true);
    }
  }, [isMobile]);
  return { mobileScreen };
}
export default useScreen;
