"use client";
import { Typography } from "@mui/material";
import { useScreen } from "./hooks";
import { ThemeProvider } from "@material-tailwind/react";
import Navbar_ from "./components/navbar_";
import Appbar_ from "./components/appbar_";
// import "@fontsource/roboto/300.css";

function LayoutPages({ children }: { children: React.ReactNode }) {
  const { mobileScreen } = useScreen();

  return (
    <main>
      <ThemeProvider>
        {mobileScreen ? (
          <div className="bg-white">
            <Navbar_ />
            <div className="py-[4.5rem]">{children}</div>
            <Appbar_ />
          </div>
        ) : (
          <div className="h-screen bg-red-200 flex justify-center items-center">
            <Typography variant="h4" gutterBottom>
              Versión exclusiva para celulares
            </Typography>
          </div>
        )}
      </ThemeProvider>
    </main>
  );
}

export default LayoutPages;
