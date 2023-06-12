"use client";
import { useEffect, useState } from "react";
import { getClientById, getClients } from "../services/clients";
import { Client } from "../models/Client";

const UseFetchClients = (id?: number) => {
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
        const fetchedClient = await getClientById(id);
        setClient(fetchedClient as any);
      } else {
        const fetchedClients = await getClients();
        setClients(fetchedClients);
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
};

export default UseFetchClients;
