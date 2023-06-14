"use client";
import OtpInput from "react18-input-otp";
import { useAuth } from "../context/authClientContext";
import QrScann from "./components/QrScann/QrScann";
import Loader from "../components/Loader";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function Login() {
  const {
    userAuth,
    password,
    error,
    validateUser,
    loading,
    isAuthenticated,
    users,
  } = useAuth();
  const [scan, setScan] = useState(false);

  const handleChange = (enteredOtp: string) => {
    const code = parseInt(enteredOtp);
    validateUser(code);
  };

  if (!users.length) return <Loader />;

  return (
    <div className="flex flex-col items-center justify-start w-screen p-10 gap-10">
      {!loading ? (
        <>
          <div
            className={`rounded-2xl flex flex-col items-center justify-center p-10 border-4 border-gray-600 w-full h-52 relative overflow-hidden`}
          >
            {scan && (
              <button
                onClick={() => setScan(false)}
                className="absolute right-0 top-0 z-50"
              >
                <CloseIcon className="text-red-600 font-bold" />
              </button>
            )}
            <QrScann
              scan={scan}
              setScan={setScan}
              validateUser={validateUser}
            />
          </div>
          <div className={`text-center ${error ? `text-red-600` : ``}  `}>
            <div
              className={`rounded-2xl w-full flex items-center justify-center p-10 border-4 ${
                error
                  ? `border-red-600`
                  : userAuth.length
                  ? `border-green-600`
                  : `border-gray-600`
              } flex-col`}
            >
              <OtpInput
                value={
                  isAuthenticated ? userAuth[0].password : (password as any)
                }
                onChange={handleChange}
                numInputs={5}
                separator={<span> - </span>}
                inputStyle={{
                  width: "40px",
                  height: "50px",
                  backgroundColor: "transparent",
                  border: "none",
                  borderBottom: "1px solid black",
                }}
              />
            </div>
            <p>{error}</p>
          </div>
        </>
      ) : (
        <p>CARGANDOOOOOOOOOOOOOOOO</p>
      )}
    </div>
  );
}
