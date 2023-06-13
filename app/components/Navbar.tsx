import Image from "next/image";
import logo from "../../public/assets/logo.png";
type Props = {};
export default function Navbar({}: Props) {
  return (
    <div className="bg-white/10 backdrop-blur-sm fixed flex justify-center items-center w-screen py-2 border-4 border-gray-700/50 rounded-br-3xl rounded-bl-3xl shadow-2xl border-t-0 z-50 bac">
      <Image height={50} src={logo} alt="logo" />
    </div>
  );
}
