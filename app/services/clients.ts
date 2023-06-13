import { Client } from "../models/Client";
const { NEXT_PUBLIC_API_BASE_URL } = process.env;

const URL = NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";

export async function getClients(): Promise<Client[]> {
  try {
    const response = await fetch(`${URL}/clients`);
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

export async function getClientById(id: number): Promise<Client[]> {
  try {
    const response = await fetch(`${URL}/clients?id=${id}`);
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
