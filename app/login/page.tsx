"use client";
import { use, useState } from "react";
import OTPInput from "react-otp-input";
import OtpInput from "react18-input-otp";
import { getUsers } from "../services/users";
import { User } from "../models/User";
import { useFetchUsers } from "../hooks";
import { useRouter } from "next/navigation";
import { useJwt } from "react-jwt";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import QrReader from "react-qr-scanner";

type Props = {};
export default function Login() {
  const router = useRouter();
  const { users } = useFetchUsers();
  const [userAuth, setUserAuth] = useState([]);
  const [password, setPassword] = useState(0);
  const [scan, setScan] = useState(false);
  const [error, setError] = useState("");

  const validateUser = (code: number) => {
    setError("");
    setPassword(code);

    const user: User[] = users.filter((user) => user.id === code);
    if (user.length && user[0].id === code) {
      setUserAuth(userAuth);
      router.push("/clients");
    } else {
      if (password.toString().length === 5) {
        setUserAuth([]);
        setError("El codigo ingresado no pertenece a ningun usuario");
      }
    }
  };
  const handleChange = (enteredOtp: string) => {
    const code = parseInt(enteredOtp);
    validateUser(code);
  };

  const handleScan = (data: any) => {
    if (data) {
      const code = parseInt(data.text);
      validateUser(code);
    }
  };

  const handleError = (err: Error) => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const qrReaderProps = {
    delay: 100,
    style: previewStyle,
    onError: handleError,
    onScan: handleScan,
  };
  return (
    <div className="flex flex-col items-center justify-start w-screen min-h-screen bg-gray-200 p-10 gap-10">
      <div
        className={`rounded-2xl flex flex-col items-center justify-center p-10 border-4 border-gray-600 h-52 w-80 relative overflow-hidden`}
      >
        {!scan ? (
          <div
            className="flex flex-col justify-center items-center gap-3"
            onClick={() => setScan(true)}
          >
            <QrCodeScannerIcon fontSize="large" style={{ fontSize: "5rem" }} />
            <p className="font-semibold text-lg">ESCANEAR QR CLIENTE</p>
          </div>
        ) : (
          <div className="absolute">
            <QrReader
              delay={100}
              style={previewStyle}
              onError={handleError}
              onScan={handleScan}
            />
          </div>
        )}
      </div>

      <div className={`text-center ${error ? `text-red-600` : ``}  `}>
        <div
          className={`rounded-2xl w-80 flex items-center justify-center p-10 border-4 ${
            error
              ? `border-red-600`
              : userAuth.length
              ? `border-green-600`
              : `border-gray-600
           `
          } flex-col`}
        >
          <OtpInput
            value={password as any}
            onChange={handleChange}
            numInputs={5}
            separator={<span> - </span>}
            inputStyle={{
              width: "50px",
              height: "50px",
              backgroundColor: "transparent",
              border: "none",
              borderBottom: "1px solid black",
            }}
          />
        </div>
        <p>{error}</p>
      </div>
    </div>
  );
}
