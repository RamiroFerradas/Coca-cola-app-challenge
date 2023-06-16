"use client";

import { RenderInput, RenderQrScann, ImagesSlider } from "./components";
export default function Login() {
  return (
    <div className="flex flex-col gap-10 items-center justify-between w-screen px-10 h-full">
      <RenderQrScann />
      <RenderInput />
      <ImagesSlider />
    </div>
  );
}
