"use client";
import { useAuth } from "../context/authClientContext";
import { RenderInput, RenderQrScann } from "./components";
import { Loader } from "../components";
export default function Login() {
  const { loading } = useAuth();

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col items-center justify-start w-screen p-10 gap-10">
      <RenderQrScann />
      <RenderInput />
    </div>
  );
}
