const token = process.env.NEXT_PUBLIC_SECRET_TOKEN;

const URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_BASE_URL
    : "http://localhost:3000/api";

export async function fetchData(path: string) {
  try {
    const response = await fetch(`${URL}/${path}`, {
      headers: {
        Authorization: `${token}`,
      },
    });
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
