"use client";
import { Appbar, Navbar } from "./components";
import { useScreen } from "./hooks";

function LayoutPages({ children }: { children: React.ReactNode }) {
  const { mobileScreen } = useScreen();

  return (
    <div>
      {mobileScreen ? (
        <main className="">
          <Navbar />
          <div className="pt-20">{children}</div>
          <Appbar />
        </main>
      ) : (
        <h1>Versión exclusiva para celulares</h1>
      )}
    </div>
  );
}

export default LayoutPages;
