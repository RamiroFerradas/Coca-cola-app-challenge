"use client";

import { RenderInput, RenderQrScann, ImagesSlider } from "./components";
export default function Login() {
  return (
    <div className="flex flex-col items-center justify-between w-screen p-10 gap-10 h-[85vh] b">
      <RenderQrScann />
      <RenderInput />
      <ImagesSlider />
    </div>
  );
}
