import { NextRequest, NextResponse } from "next/server";

import usersData from "./clients.json";
import { Client } from "@/app/models/Client";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (id) {
      return getUserById(id);
    } else {
      return getAllUsers();
    }
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

function getUserById(id: string) {
  try {
    const data: Client[] = usersData.clients;
    const user = data.find((client) => client.id === parseInt(id));

    if (user) {
      return NextResponse.json(user);
    } else {
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );
    }
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

function getAllUsers() {
  try {
    const data: Client[] = usersData.clients;
    return NextResponse.json(data);
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
