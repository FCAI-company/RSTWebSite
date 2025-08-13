import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const jsonPath = path.join(process.cwd(), "public", "pdf-data.json");
    const jsonData = fs.readFileSync(jsonPath, "utf-8");
    const data = JSON.parse(jsonData);

    return NextResponse.json({ text: data });
  } catch (err: any) {
    console.error("Error reading JSON:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
