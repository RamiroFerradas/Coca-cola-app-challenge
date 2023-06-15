const TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import usersData from "./users.json";
import { User } from "@/app/models/User";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const headersInstance = headers();
    const authorization = headersInstance.get("authorization");

    if (!authorization || authorization !== TOKEN) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

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
