"use client";
import { useState } from "react";
import OtpInput from "react18-input-otp";
import { User } from "../models/User";
import { useFetchUsers } from "../hooks";
import { useRouter } from "next/navigation";
import { QrScann } from "./components/QrScann";

export default function Login() {
  const router = useRouter();
  const { users, loading } = useFetchUsers();
  const [userAuth, setUserAuth] = useState([]);
  const [password, setPassword] = useState(0);
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

  return (
    <div className="flex flex-col items-center justify-start w-screen min-h-screen bg-gray-200 p-10 gap-10">
      {!loading ? (
        <>
          <div
            className={`rounded-2xl flex flex-col items-center justify-center p-10 border-4 border-gray-600 h-52 w-80 relative overflow-hidden`}
          >
            <QrScann validateUser={validateUser} />
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
        </>
      ) : (
        <p>CARGANDOOOOOOOOOOOOOOOO</p>
      )}
    </div>
  );
}
