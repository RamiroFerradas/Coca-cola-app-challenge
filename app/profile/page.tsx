"use client";
import {
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  Typography,
  ListItemButton,
  Button,
} from "@mui/material";
import { useAuth } from "../context/authClientContext";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ForkLeftIcon from "@mui/icons-material/ForkLeft";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import { SaveOutlined } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowRight";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
              .map(([key, value]) => {
                const Telefono = key === "Telefono";
                const Email = key === "Email";
                const renderInput = key === "Email" || key === "Telefono";
                const IconComponent =
                  key === "Nombre"
                    ? PersonIcon
                    : Email
                    ? EmailIcon
                    : Telefono
                    ? PhoneIcon
                    : key === "Direccion"
                    ? LocationOnIcon
                    : key === "Ruta"
                    ? ForkLeftIcon
                    : null;

                return (
                  <ListItem
                    className="border-2 border-gray-500/30 my-1 rounded-md py-2 px-3"
                    disablePadding
                    key={i++}
                  >
                    {(edit.Email && Email) || (edit.Telefono && Telefono) ? (
                      <input
                        className="w-full h-16 py-2 px-3 outline-none"
                        autoFocus
                        onChange={(event) => handleChange(event, key)}
                        type={Telefono ? "number" : "text"}
                        defaultValue={
                          Telefono ? editValue.mobile : editValue.email
                        }
                      />
                    ) : (
                      <ListItemText>
                        <div className="flex justify-start flex-row items-center w-full overflow-hidden">
                          <div className="flex flex-row">
                            <ListItemIcon>
                              {IconComponent && <IconComponent />}
                            </ListItemIcon>
                          </div>
                          <div>
                            <ListItemText secondary={key} />
                            <ListItemText primary={value} />
                          </div>
                        </div>
                      </ListItemText>
                    )}
                    {renderInput ? (
                      (!edit.Email && Email) || (!edit.Telefono && Telefono) ? (
                        <button
                          onClick={() =>
                            setEdit({ ...edit, [key]: !edit[key] })
                          }
                        >
                          <EditNoteOutlinedIcon />
                        </button>
                      ) : (
                        <div className="flex gap-2">
                          <button onClick={() => handleUpdateUser(key)}>
                            <SaveOutlined />
                          </button>
                          <button
                            onClick={() => {
                              setEdit({ ...edit, [key]: false });
                              setEditValue({ ...editValue, [key]: "" });
                            }}
                          >
                            <CloseIcon className="text-red-500" />
                          </button>
                        </div>
                      )
                    ) : null}
                  </ListItem>
                );
              })}
          </div>
        ))}
        <div className="flex flex-col">
          {footerButtons.map((item, i) => (
            <ListItemButton
              key={i}
              className="border-2 h-20 bg-gray-500/30 my-1 rounded-md py-2 px-3"
            >
              <ListItemIcon>{item.icon}</ListItemIcon>

              <ListItemText primary={item.label} />

              <ListItemIcon>
                <KeyboardArrowLeftIcon fontSize="large" />
              </ListItemIcon>
            </ListItemButton>
          ))}
        </div>
      </List>
      <Button
        className="bg-red-500 w-full text-white z-50"
        onClick={() => logout()}
      >
        CERRAR SESION
      </Button>
    </nav>
  );
}
