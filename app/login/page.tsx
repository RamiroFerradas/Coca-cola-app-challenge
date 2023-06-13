"use client";
import OtpInput from "react18-input-otp";
import { useAuth } from "../context/authClientContext";
import QrScann from "./components/QrScann/QrScann";

export default function Login() {
  const { userAuth, password, error, validateUser, loading, isAuthenticated } =
    useAuth();

  const handleChange = (enteredOtp: string) => {
    const code = parseInt(enteredOtp);
    validateUser(code);
  };

  return (
    <div className="flex flex-col items-center justify-start w-screen p-10 gap-10">
      {!loading ? (
        <>
          <div
            className={`rounded-2xl flex flex-col items-center justify-center p-10 border-4 border-gray-600 w-full h-52 relative overflow-hidden`}
          >
            <QrScann validateUser={validateUser} />
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
