"use client";
import { useEffect, useState } from "react";
import { getClients } from "../services/clients";
import { Client } from "../models/Client";

const UseFetchClients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchClients = async () => {
    try {
      setLoading(true);
      const res = await getClients();

      setClients(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return { clients, loading };
};

export default UseFetchClients;
