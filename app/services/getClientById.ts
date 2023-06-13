import { Client } from "../models/Client";

const URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_BASE_URL
    : "http://localhost:3000/api";

export async function getClientById(id: number): Promise<Client> {
  try {
    const response = await fetch(`${URL}/clients?id=${id}`);

    if (!response.ok) {
      throw new Error("Error fetching clients");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching clients:", error);
    return {
      id: 0,
      name: "",
      channel: "",
      gec: "",
      address: "",
      enabled: false,
      // Asegúrate de incluir todas las propiedades requeridas en el objeto Client
    }; // Devuelve un objeto literal vacío
  }
}
