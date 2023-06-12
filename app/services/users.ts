import { User } from "../models/User";

export async function getUsers(): Promise<User[]> {
  try {
    const response = await fetch("http://localhost:3000/api/users");
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
