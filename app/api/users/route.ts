import { NextRequest, NextResponse } from "next/server";

import usersData from "./users.json";
import { User } from "@/app/models/User";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const data: User[] = usersData.users;
    return NextResponse.json(data);
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
