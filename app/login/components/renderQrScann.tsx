import { useAuth } from "@/app/context/authClientContext";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import QrScann from "./qrScann";

type Props = {};
export default function RenderQrScann({}: Props) {
  const [scan, setScan] = useState(false);

  const { userAuth, validateUser, isAuthenticated } = useAuth();

  return (
    <div
      className={`rounded-2xl flex flex-col items-center justify-center p-10 border-4  border-gray-600/30 shadow-xl w-full h-52 relative overflow-hidden`}
    >
      {!isAuthenticated ? (
        <>
          {scan && (
            <button
              onClick={() => setScan(false)}
              className="absolte right-0 top-0 z-50"
            >
              <CloseIcon className="text-red-600 font-bold" />
            </button>
          )}
          <QrScann scan={scan} setScan={setScan} validateUser={validateUser} />
        </>
      ) : (
        <div className="welcome-div font-bold text-2xl text-gray-800 transition-all">
          <span>¡Bienvenido {userAuth[0].name}!</span>
        </div>
      )}
    </div>
  );
}
