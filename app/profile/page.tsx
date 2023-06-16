"use client";
import { List, Typography } from "@mui/material";
import { useAuth } from "../context/authClientContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import { FooterButtons, FieldUserData } from "./components";
import { Loader } from "../components";
import { useTheme } from "../context/themeContext";

export default function Profile() {
  const router = useRouter();

  const { theme } = useTheme();

  const { userAuth, setUserAuth, isAuthenticated } = useAuth();

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

  // if (loading) return <Loader />;

  return !isAuthenticated ? (
    router.push("/login")
  ) : (
    <nav aria-label="main mailbox folders" className="px-4 py-2">
      <Typography
        variant="overline"
        className={`text-center ${
          theme === "dark" ? "text-gray-200" : "text-gray-700"
        } font-semibold text-xl`}
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
                <FieldUserData
                  theme={theme}
                  key={i++}
                  keyValue={key}
                  value={value}
                  userAuth={userAuth}
                  setUserAuth={setUserAuth}
                />
              ))}
          </div>
        ))}

        <FooterButtons theme={theme} />
      </List>
    </nav>
  );
}
