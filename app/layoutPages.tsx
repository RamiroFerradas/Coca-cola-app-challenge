"use client";
import { Typography } from "@mui/material";
import { useScreen } from "./hooks";
import { Appbar, Loader, Navbar } from "./components";
import { ThemeProvider, useTheme } from "./context/themeContext";
import Image from "next/image";
import onlySmartPhone from "@/public/assets/onlysmarthpone.jpg";
// import "@fontsource/roboto/300.css";

import { Oxygen } from "next/font/google";

const inter = Oxygen({
  weight: "700",
  subsets: ["latin", "latin-ext"],
});
function LayoutPages({ children }: { children: React.ReactNode }) {
  const { mobileScreen, loaderScreen } = useScreen();
  const { theme } = useTheme();

  return loaderScreen ? (
    <Loader />
  ) : (
    <main>
      {mobileScreen ? (
        <div className={theme !== "dark" ? "bg-white" : "bg-gray-800"}>
          <Navbar />
          <div className="py-[4.2rem]">{children}</div>
          <Appbar />
        </div>
      ) : (
        <div className="h-screen flex justify around items-center relative w-screen">
          <div className="w-1/2 p-20">
            <p className={`font-bold text-6xl font ${inter.className}`}>
              ¡App disponible únicamente para SmartPhones!
            </p>
          </div>
          <div className="absolute right-0 bottom-0">
            <Image src={onlySmartPhone} alt="onlysmartphone" />
          </div>
        </div>
      )}
    </main>
  );
}

export default LayoutPages;
