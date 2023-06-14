"use client";
import { Typography } from "@mui/material";
import { Appbar, Navbar } from "./components";
import { AuthProvider } from "./context/authClientContext";
import { useScreen } from "./hooks";
// import "@fontsource/roboto/300.css";

function LayoutPages({ children }: { children: React.ReactNode }) {
  const { mobileScreen } = useScreen();

  return (
    <AuthProvider>
      <div>
        {mobileScreen ? (
          <main className="bg-white">
            <Navbar />
            <div className="py-[4.5rem]">{children}</div>
            <Appbar />
          </main>
        ) : (
          <div className="h-screen bg-red-200 flex justify-center items-center">
            <Typography variant="h4" gutterBottom>
              Versión exclusiva para celulares
            </Typography>
          </div>
        )}
      </div>
    </AuthProvider>
  );
}

export default LayoutPages;
