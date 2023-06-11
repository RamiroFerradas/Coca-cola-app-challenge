"use client";
import { use, useState } from "react";
import OTPInput from "react-otp-input";
import OtpInput from "react18-input-otp";
import { getUsers } from "../services/users";
import { User } from "../models/User";
import { useFetchUsers } from "../hooks";

type Props = {};
export default function Login() {
  const { users } = useFetchUsers();

  const [password, setPassword] = useState(0);
  const handleChange = (enteredOtp: string) => {
    const code = parseInt(enteredOtp);
    setPassword(code);
    const user: User[] = users.filter((user) => user.id === code);
    if (user.length && user[0].id === code) {
      console.log("VALIDADO");
      // Acceso válido, realizar acción o redirigir a la página deseada
    } else {
      console.log("NO VALIDADO");
      // Acceso inválido, mostrar mensaje de error o realizar alguna acción
    }
  };

  return (
    <div className="flex flex-col items-center justify-start w-screen min-h-screen bg-gray-200 p-10">
      <div className="rounded-2xl flex items-center justify-center p-10 border-2 border-gray-900">
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
    </div>
  );
}
