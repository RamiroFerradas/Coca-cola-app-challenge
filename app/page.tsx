import { useScreen } from "./hooks";

export default function Home() {
  const { mobileScreen } = useScreen();

  return (
    <main className="">
      {mobileScreen ? (
        <h1>ESTAS EN UN CELU</h1>
      ) : (
        <h1>Version excusiba para celulares</h1>
      )}
    </main>
  );
}
