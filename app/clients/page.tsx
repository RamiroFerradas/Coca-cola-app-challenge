"use client";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useFetchClients } from "../hooks";
import { Client } from "../models/Client";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Clients() {
  const router = useRouter();
  const { clients } = useFetchClients();

  const [searchCLient, setSearchCLient] = useState("");

  const filteredClients = clients.filter((client: Client) =>
    client.name.toLowerCase().includes(searchCLient.toLowerCase())
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCLient(event.target.value);
  };
  return (
    <Box className="w-full max-w-360 bg-white px-3">
      <div className="border border-gray-900 my-1 rounded-md">
        <input
          type="text"
          value={searchCLient}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          placeholder="Buscar clientes"
        />
      </div>
      <nav aria-label="main mailbox folders">
        <List>
          {filteredClients.map((client: Client) => (
            <ListItem
              className="border border-gray-900 my-1 rounded-md"
              disablePadding
              key={client.id}
              onClick={() => router.push(`/clients/${client.id}`)}
            >
              <ListItemButton>
                <ListItemIcon>
                  <KeyboardArrowRightIcon />
                </ListItemIcon>
                <div className="">
                  <ListItemText primary={client.name} />
                  <ListItemText secondary={client.address} />
                </div>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
