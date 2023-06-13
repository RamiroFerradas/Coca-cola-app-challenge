"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import LoginIcon from "@mui/icons-material/Login";
import GroupsIcon from "@mui/icons-material/Groups";
export default function Appbar() {
  const [value, setValue] = useState(0);
  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const pathname = usePathname();

  return (
    <Tabs
      className="fixed bottom-0 bg-gray-300 text-center flex m-auto items-center justify-center w-screen gap-4"
      value={value}
      onChange={handleChange}
      aria-label="icon tabs example"
    >
      <Tab
        icon={<LoginIcon />}
        onClick={() => router.push("/login")}
        aria-label="login"
      />
      <Tab
        icon={<GroupsIcon />}
        onClick={() => router.push("/clients")}
        aria-label="clients"
      />
      <Tab
        icon={<PersonPinIcon />}
        onClick={() => router.push("")}
        aria-label="person"
      />
      <Tab
        icon={<PersonPinIcon />}
        onClick={() => router.push("/profile")}
        aria-label="profile"
      />
    </Tabs>
  );
}
