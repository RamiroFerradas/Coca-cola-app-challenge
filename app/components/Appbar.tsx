"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import LoginIcon from "@mui/icons-material/Login";
import GroupsIcon from "@mui/icons-material/Groups";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useAuth } from "../context/authClientContext";
export default function Appbar() {
  const [value, setValue] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();

  const tabs = [
    { label: "Login", icon: <LoginIcon />, path: "/login" },
    { label: "Clients", icon: <GroupsIcon />, path: "/clients" },
    { label: "Products", icon: <FormatListBulletedIcon />, path: "/products" },
    { label: "Profile", icon: <PersonPinIcon />, path: "/profile" },
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    const selectedTabIndex = tabs.findIndex((tab) => tab.path === pathname);
    setValue(selectedTabIndex);
  }, [pathname]);

  return (
    <Tabs
      className="fixed bottom-0 bg-gray-300 text-center flex m-auto items-center justify-center w-screen gap-4"
      value={value}
      onChange={handleChange}
      aria-label="icon tabs example"
      centered
      TabIndicatorProps={{
        style: {
          backgroundColor: "#ff3434",
          height: "3px", // Ajusta el grosor del indicador aquí
        },
      }}
      textColor="inherit"
    >
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          icon={tab.icon}
          aria-label={tab.label}
          onClick={() => router.push(tab.path)}
          disabled={!isAuthenticated && index !== 0}
        />
      ))}
    </Tabs>
  );
}
