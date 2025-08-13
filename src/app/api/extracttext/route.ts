import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import pdf from "pdf-parse";
import { Faculties } from "@/app/config/config";

export const runtime = "nodejs"; // Force Node.js runtime

export async function GET() {
  try {
    const dataDir = path.join(process.cwd(), "public", "data");
    console.log("Data directory:", dataDir);

    let context = "";

    for (const fileName of Faculties) {
      const filePath = path.join(dataDir, `${fileName}.pdf`);
      console.log("Checking file:", filePath);

      if (!fs.existsSync(filePath)) {
        console.error(`Missing file: ${filePath}`);
        continue;
      }

      try {
        const pdfBuffer = fs.readFileSync(filePath);
        const data = await pdf(pdfBuffer);

        context += `${fileName.replace(/_/g, " ")}:\n${data.text.replace(
          /\n\s*\n/g,
          "\n",
        )}\n\n`;
      } catch (pdfErr) {
        console.error(`Error parsing ${fileName}.pdf:`, pdfErr);
      }
    }

    return NextResponse.json({ text: context });
  } catch (err: any) {
    console.error("Error extracting text:", err);
    return NextResponse.json(
      { error: err?.message || "Unknown server error" },
      { status: 500 },
    );
  }
}
