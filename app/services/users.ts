import { User } from "../models/User";

// const URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";
console.log(URL);
export async function getUsers(): Promise<User[]> {
  try {
    const response = await fetch(`${URL}/users`);
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
