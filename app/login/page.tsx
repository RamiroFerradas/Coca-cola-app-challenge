"use client";
import { Carousel } from "@material-tailwind/react";
import { Loader } from "../components";
import { useAuth } from "../context/authClientContext";
import { RenderInput, RenderQrScann, ImagesSlider } from "./components";
export default function Login() {
  const { loading } = useAuth();

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col items-center justify-between w-screen p-10 gap-10 h-[85vh] b">
      <RenderQrScann />
      <RenderInput />
      <ImagesSlider />
    </div>
  );
}
