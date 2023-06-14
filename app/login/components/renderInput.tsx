import { useAuth } from "@/app/context/authClientContext";
import OtpInput from "react18-input-otp";
import CheckIcon from "@mui/icons-material/Check";

type Props = {};
export default function RenderInput({}: Props) {
  const {
    userAuth,
    password,
    error,
    validateUser,
    loading,
    isAuthenticated,
    users,
    loadAuthUser,
  } = useAuth();

  const handleChange = (enteredOtp: string) => {
    const code = parseInt(enteredOtp);
    validateUser(code);
  };

  return (
    <div className={`text-center ${error ? `text-red-600` : ``}  `}>
      {!isAuthenticated ? (
        <div
          className={`rounded-2xl w-full flex items-center justify-center p-10 border-4 ${
            error ? `border-red-600` : `border-gray-600`
          } flex-col`}
        >
          <OtpInput
            value={isAuthenticated ? userAuth[0].password : (password as any)}
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
      ) : (
        <div
          className={`rounded-2xl w-80 flex items-center justify-center p-10 flex-col h-20 bg-green-400 transition-all border-4 ${
            loadAuthUser && `animate-pulse`
          }`}
        >
          {!loadAuthUser ? (
            <CheckIcon fontSize="large" className="text-gray-700" />
          ) : (
            `Cargando datos...`
          )}
        </div>
      )}
      <p>{error}</p>
    </div>
  );
}
