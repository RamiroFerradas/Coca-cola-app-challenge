"use client";
import { useFetchClients } from "@/app/hooks";
import useFetchProducts from "@/app/hooks/useFetchProducts";
import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Unmissables, Promotions, Exchange, Missions } from "./components";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useAuth } from "@/app/context/authClientContext";
import { Loader } from "@/app/components";
import { useTheme } from "@/app/context/themeContext";

export default function ClientDetail() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const { id } = useParams();
  const { client } = useFetchClients(parseInt(id));

  const { missions, unmissables, loading } = useFetchProducts();
  const values = {
    id: client.id,
    cliente: client.name,
    canal: `${client.channel} ${client.gec}`,
    direccion: "Avda. Sarmiento 45000",
  };

  const [buttonAction, setButtonAction] = useState<string>("dynamics");
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setButtonAction(newAlignment);
  };
  const { theme } = useTheme();

  if (!client || loading) return <Loader />;

  return !isAuthenticated ? (
    router.push("/login")
  ) : (
    <div className="flex flex-col items-center justify-start w-screen px-2 gap-2 overflow-hidden">
      <div
        className={`rounded-xl flex flex-col items-start justify-center p-2 border-2 ${
          theme === "dark"
            ? "bg-gray-900 border-gray-200/50"
            : " border-gray-600/50"
        } w-full relative overflow-hidden`}
      >
        <div>
          {Object.entries(values).map(([key, value], i) => (
            <Typography
              key={i}
              variant="subtitle2"
              display="block"
              gutterBottom
              className={`${
                theme === "dark" ? "text-gray-100" : "text-gray-700"
              }`}
            >
              <p className="">
                <span className="font-bold">{key.toUpperCase()}</span>: {value}
              </p>
            </Typography>
          ))}
        </div>
        <div className="absolute top-0 right-0 p-2">
          <Link href="/clients">
            <CloseIcon className="text-red-600 font-bold" />
          </Link>
        </div>
      </div>

      <div
        className={`flex justify-center items-center flex-col ${
          theme === "dark" && "bg-gray-900"
        } rounded-xl`}
      >
        <ToggleButtonGroup
          color="error"
          value={buttonAction}
          exclusive
          onChange={handleChange}
          aria-label="Dynamics"
        >
          <ToggleButton
            disabled={buttonAction === "dynamics" ? true : false}
            color="error"
            value="dynamics"
          >
            <span
              className={
                buttonAction !== "dynamics" ? "text-gray-500" : "text-red-500"
              }
            >
              Dinamicas a ejecutar
            </span>
          </ToggleButton>
          <ToggleButton
            disabled={buttonAction === "resumen"}
            color="error"
            value="resumen"
          >
            <span
              className={
                buttonAction !== "resumen" ? "text-gray-500" : "text-red-500"
              }
            >
              Resumen app
            </span>
          </ToggleButton>
        </ToggleButtonGroup>

        <div
          className={`${theme === "dark" && "text-white"} overflow-y-scroll`}
        >
          {buttonAction === "resumen" ? (
            <div className="flex flex-col gap-4">
              <Missions theme={theme} missions={missions} />
              <Unmissables theme={theme} unmissables={unmissables} />
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <Promotions theme={theme} />
              <Exchange theme={theme} unmissables={unmissables} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
