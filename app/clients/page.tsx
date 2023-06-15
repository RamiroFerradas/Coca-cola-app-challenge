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
import { useAuth } from "../context/authClientContext";
import { Loader } from "../components";
import Searchbar_ from "../components/searchbar_";

export default function Clients() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const { clients, loading } = useFetchClients();
  const [searchCLient, setSearchCLient] = useState("");

  const filteredClients = clients.filter((client: Client) =>
    client.name.toLowerCase().includes(searchCLient.toLowerCase())
  );
  if (loading) return <Loader />;

  return !isAuthenticated ? (
    router.push("/login")
  ) : (
    <Box className="w-full max-w-360 bg-white px-3">
      <Searchbar_
        search={searchCLient}
        setSearch={setSearchCLient}
        placeholder="Buscar cliente"
      />
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
