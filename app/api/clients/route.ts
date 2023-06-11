import { NextRequest, NextResponse } from "next/server";

import usersData from "./clients.json";
import { Client } from "@/app/models/Client";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const data: Client[] = usersData.clients;
    return NextResponse.json(data);
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
