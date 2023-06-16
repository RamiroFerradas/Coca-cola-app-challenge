"use client";

import { RenderInput, RenderQrScann, ImagesSlider } from "./components";
export default function Login() {
  return (
    <div className="flex flex-col items-center justify-between w-screen px-10 gap-7 h-[85vh] pt-2">
      <RenderQrScann />
      <RenderInput />
      <ImagesSlider />
    </div>
  );
}
