import { Client } from "../models/Client";

const URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";
console.log(URL);
export async function getClients(): Promise<Client[]> {
  try {
    const response = await fetch(`${URL}/clients`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
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
