"use client";
import { useEffect, useState } from "react";
import { Client } from "../models/Client";
import { fetchData, getClientById } from "../services";

export default function useFetchClients(id?: number) {
  const initialClient: Client = {
    id: 0,
    name: "",
    channel: "",
    gec: "",
    address: "",
    enabled: false,
  };
  const [clients, setClients] = useState<Client[]>([]);
  const [client, setClient] = useState<Client>(initialClient);
  const [loading, setLoading] = useState(false);

  const fetchClients = async () => {
    try {
      setLoading(true);
      if (id) {
        const client = await getClientById(id);
        setClient(client);
      } else {
        const clients = await fetchData("clients");
        setClients(clients);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return { clients, loading, client };
}
