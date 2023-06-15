"use client";
import { List, Typography } from "@mui/material";
import { useAuth } from "../context/authClientContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import { FooterButtons, FieldUserData } from "./components";
import { Loader } from "../components";
type Props = {};
export default function Profile({}: Props) {
  const router = useRouter();
  const { userAuth, setUserAuth, logout, loading, isAuthenticated } = useAuth();

  const [edit, setEdit] = useState({
    Telefono: false,
    Email: false,
  });
  const [editValue, setEditValue] = useState({
    mobile: !userAuth.length ? userAuth[0]?.mobile : "",
    email: !userAuth.length ? userAuth[0]?.email : "",
  });

  const userRender = [
    {
      id: userAuth[0]?.id,
      Nombre: userAuth[0]?.name,
      Email: userAuth[0]?.email,
      Telefono: userAuth[0]?.mobile,
      Direccion: userAuth[0]?.address,
      Ruta: userAuth[0]?.route,
    },
  ];
  const footerButtons = [
    {
      icon: <CardGiftcardIcon />,
      label: "Mis Puntos FEMSA",
    },
    {
      icon: <HeadsetMicIcon />,
      label: "Contacto",
    },
  ];

  const handleUpdateUser = (key: string) => {
    const updatedKey = key === "Email" ? "email" : "mobile";

    const updatedUserAuth = userAuth.map((user) => {
      if (user.id === userRender[0].id) {
        return {
          ...user,
          [updatedKey]: editValue[updatedKey],
        };
      }
      return user;
    });

    setUserAuth(updatedUserAuth);
    setEdit({
      ...edit,
      [key]: false,
    });
  };
  const handleChange = (event: any, key: string) => {
    const { value } = event.target;
    const updatedKey = key === "Email" ? "email" : "mobile";

    setEditValue({
      ...editValue,
      [updatedKey]: value,
    });
  };

  if (loading) return <Loader />;

  return !isAuthenticated ? (
    router.push("/login")
  ) : (
    <nav aria-label="main mailbox folders" className="px-4">
      <Typography
        variant="overline"
        className="text-center text-gray-700 font-semibold text-xl"
        display="block"
        gutterBottom
      >
        Mis datos
      </Typography>
      <List className="flex gap-2 flex-col">
        {userRender.map((user, i) => (
          <div key={i} className="flex gap-1 flex-col">
            {Object.entries(user)
              .slice(1)
              .map(([key, value]) => (
                <FieldUserData key={i++} keyValue={key} value={value} />
              ))}
          </div>
        ))}

        <FooterButtons />
      </List>
    </nav>
  );
}
