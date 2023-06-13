"use client";
import { useFetchClients } from "@/app/hooks";
import useFetchProducts from "@/app/hooks/useFetchProducts";
import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Unmissables, Misiones, Promotions, Exchange } from "./components";

type Props = {};
export default function ClientDetail({}: Props) {
  const { id } = useParams();

  const { client } = useFetchClients(parseInt(id));
  const values = {
    id: client.id,
    cliente: client.name,
    canal: `${client.channel} ${client.gec}`,
    direccion: "Avda. Sarmiento 45000",
  };

  const [butonAction, setbutonAction] = useState<string>("dynamics");
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setbutonAction(newAlignment);
  };

  const { missionss, unmissables } = useFetchProducts();

  return (
    <div className="flex flex-col items-center justify-start w-screen px-2 py-2 gap-2">
      <div
        className={`rounded-xl flex flex-col items-start justify-center p-2 border-2 border-gray-600/50  w-full relative overflow-hidden`}
      >
        {Object.entries(values).map(([key, value], i) => (
          <Typography
            key={i}
            variant="subtitle2"
            display="block"
            gutterBottom
            className="text-gray-700"
          >
            <p className="">
              <span className="font-bold">{key.toUpperCase()}</span>: {value}
            </p>
          </Typography>
        ))}
      </div>

      <ToggleButtonGroup
        color="primary"
        value={butonAction}
        exclusive
        onChange={handleChange}
        aria-label="Dynamics"
      >
        <ToggleButton
          disabled={butonAction === "dynamics" ? true : false}
          color="error"
          value="dynamics"
        >
          Dinamicas a ejecutar
        </ToggleButton>
        <ToggleButton
          disabled={butonAction === "resumen" ? true : false}
          color="error"
          value="resumen"
        >
          Resumen app
        </ToggleButton>
      </ToggleButtonGroup>

      <div>
        {butonAction === "resumen" ? (
          <div className="flex flex-col gap-4">
            <Misiones missionss={missionss} />
            <Unmissables unmissables={unmissables} />
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <Promotions />
            <Exchange unmissables={unmissables} />
          </div>
        )}
      </div>
    </div>
  );
}
