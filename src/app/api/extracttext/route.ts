import { NextResponse } from "next/server";
// import fs from "fs";
// import path from "path";
import pdf from "pdf-parse";
import { Faculties } from "@/app/config/config";

export async function GET(request: Request) {
  try {

     const origin = new URL(request.url).origin;

 
    // const dataDir = path.join(process.cwd(), "public", "data");
      // const files = fs.readdirSync(dataDir).filter((f) => f.endsWith(".pdf"));
 
      let context = "";

  for (const fileName of Faculties) {
  const encodedName = encodeURIComponent(`${fileName}.pdf`);
  const res = await fetch(`${origin}/data/${encodedName}`);


  if (!res.ok) {
    console.error(`Missing file: ${encodedName}`);
   
    continue;  
  }

     const arrayBuffer = await res.arrayBuffer();
      const pdfBuffer = Buffer.from(arrayBuffer);
      // const data = await pdf(pdfBuffer);
context = pdfBuffer+"  " ;
//   context += `${fileName.replace(/_/g, " ")}:\n ${data.text.replace(
//     /\n\s*\n/g,
//     "\n",
//   )}\n\n`;
  }

    // for (const fileName of files) {
    //   const filePath = path.join(dataDir, fileName);
    //   const pdfBuffer = fs.readFileSync(filePath);
    //   const data = await pdf(pdfBuffer);
    //   context += `${fileName.split(".pdf")[0]}:\n ${data.text.replace(
    //     /\n\s*\n/g,
    //     "\n"
    //   )}\n\n`;
    // }

    return NextResponse.json({ text: context });
  } catch (err: any) {
    console.log("Error extracting text:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
