"use client";
import { UseFetchClients } from "@/app/hooks";
import useFetchProducts from "@/app/hooks/useFetchProducts";
import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useState } from "react";
import Resumen from "./components/resumen";
import Misiones from "./components/misiones";

type Props = {};
export default function ClientDetail({}: Props) {
  const { id } = useParams();

  const { client } = UseFetchClients(parseInt(id));
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

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

  const { products } = useFetchProducts();

  return (
    <div className="flex flex-col items-center justify-start w-screen px-2 py-2 gap-2">
      <div
        className={`rounded-2xl flex flex-col items-start justify-center p-2 border-2 border-gray-600/50  w-full relative overflow-hidden`}
      >
        {Object.entries(values).map(([key, value], i) => (
          <Typography
            key={i}
            variant="subtitle2"
            display="block"
            gutterBottom
            className="text-gray-700 font-bold"
          >
            {key.toUpperCase()}: {value}
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
        <ToggleButton color="error" value="dynamics">
          Dinamicas a ejecutar
        </ToggleButton>
        <ToggleButton color="error" value="resumen">
          Resumen app
        </ToggleButton>
      </ToggleButtonGroup>

      <div>
        {butonAction === "resumen" ? (
          <div className="flex flex-col gap-4">
            <Resumen products={products} />
            <Misiones products={products} />
          </div>
        ) : (
          <Misiones products={products} />
        )}
      </div>
    </div>
  );
}
