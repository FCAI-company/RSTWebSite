import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import pdf from "pdf-parse";

export async function GET() {
  try {
    const dataDir = path.join(process.cwd(), "src", "data");
    const files = fs.readdirSync(dataDir).filter((f) => f.endsWith(".pdf"));
    let context = "";

    for (const fileName of files) {
      const filePath = path.join(dataDir, fileName);
      const pdfBuffer = fs.readFileSync(filePath);
      const data = await pdf(pdfBuffer);
      context += `${fileName.split(".pdf")[0]}:\n ${data.text.replace(
        /\n\s*\n/g,
        "\n"
      )}\n\n`;
    }

    return NextResponse.json({ text: context });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
