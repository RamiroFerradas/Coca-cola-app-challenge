import { Client } from "../models/Client";

export async function getClients(): Promise<Client[]> {
  try {
    const response = await fetch("http://localhost:3000/api/clients");
    if (!response.ok) {
      throw new Error("Error fetching clients");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching clients:", error);
    return [];
  }
}
