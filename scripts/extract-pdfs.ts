import { Faculties } from "../src/app/info/info";
import fs from "fs";
import path from "path";
import pdf from "pdf-parse";
 

(async () => {
  const dataDir = path.join(process.cwd(), "public", "data");
  let context: string = "";
  console.log(Faculties);
  for (const fileName of Faculties) {
    console.log(fileName);
    const filePath = path.join(dataDir, `${fileName}.pdf`);
    console.log(filePath);
    if (!fs.existsSync(filePath)) continue;
    const pdfBuffer = fs.readFileSync(filePath);
    const data = await pdf(pdfBuffer);
    context +=
      fileName.replace(/_/g, " ") + data.text.replace(/\n\s*\n/g, "\n");
  }

  const outputPath = path.join(process.cwd(), "public", "pdf-data.json");
  fs.writeFileSync(outputPath, JSON.stringify(context, null, 2));
  return context;
})();
