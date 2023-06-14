"use client";
import { Appbar, Navbar } from "./components";
import { AuthProvider } from "./context/authClientContext";
import { useScreen } from "./hooks";

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
          <h1>Versión exclusiva para celulares</h1>
        )}
      </div>
    </AuthProvider>
  );
}

export default LayoutPages;
