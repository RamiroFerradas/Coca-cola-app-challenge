"use client";
import Appbar from "./components/Appbar";
import { useScreen } from "./hooks";

function LayoutPages({ children }: { children: React.ReactNode }) {
  const { mobileScreen } = useScreen();

  return (
    <div>
      {mobileScreen ? children : <h1>Versión exclusiva para celulares</h1>}
    </div>
  );
}

export default LayoutPages;
