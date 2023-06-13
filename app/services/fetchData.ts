import { Client } from "../models/Client";
import { Product } from "../models/Product";
import { User } from "../models/User";

const URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_BASE_URL
    : "http://localhost:3000/api";

export async function fetchData(path: string) {
  try {
    const response = await fetch(`${URL}/${path}`);
    if (!response.ok) {
      throw new Error("Error fetching users");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}
