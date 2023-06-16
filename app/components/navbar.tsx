import Image from "next/image";
import logo from "../../public/assets/logo.png";
import SwitchTheme from "./switch";

export default function Navbar() {
  return (
    <div className="bg-white/10 backdrop-blur-sm flex justify-center items-center w-screen py-2 border-4 border-gray-700/50 rounded-br-3xl rounded-bl-3xl shadow-xl border-t-0 z-50 h-20 max-h-20 overflow-hidden">
      <Image height={50} src={logo} alt="logo" />
      <div className="absolute right-0 mr-0">
        <SwitchTheme />
      </div>
    </div>
  );
}
