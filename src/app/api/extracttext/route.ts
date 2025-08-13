import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import pdf from "pdf-parse";
import { Faculties } from "@/app/config/config";

export const runtime = "nodejs"; // Force Node.js runtime

export async function GET() {
  try {
    const dataDir = path.join(process.cwd(), "public", "data"); // public/data folder
    let context = "";

    for (const fileName of Faculties) {
      const filePath = path.join(dataDir, `${fileName}.pdf`);

      if (!fs.existsSync(filePath)) {
        console.error(`Missing file: ${fileName}.pdf`);
        continue;
      }

      const pdfBuffer = fs.readFileSync(filePath); // direct read
      const data = await pdf(pdfBuffer);

      context += `${fileName.replace(/_/g, " ")}:\n${data.text.replace(
        /\n\s*\n/g,
        "\n",
      )}\n\n`;
    }

    return NextResponse.json({ text: context });
  } catch (err: any) {
    console.error("Error extracting text:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
