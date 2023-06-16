"use client";
import { Typography } from "@mui/material";
import { useScreen } from "./hooks";
import { Appbar, Loader, Navbar } from "./components";
import { ThemeProvider, useTheme } from "./context/themeContext";
// import "@fontsource/roboto/300.css";

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
        <div className="h-screen bg-red-200 flex justify-center items-center">
          <Typography variant="h4" gutterBottom>
            Versión exclusiva para celulares
          </Typography>
        </div>
      )}
    </main>
  );
}

export default LayoutPages;
