import fs from "fs";
import path from "path";
import pdf from "pdf-parse";
import { Faculties } from "../src/app/info/info";
const dataDir = path.join(process.cwd(), "public", "data");
const outputPath = path.join(process.cwd(), "public", "pdf-data.json");
(async () => {
    let result = {};
    for (const fileName of Faculties) {
        const filePath = path.join(dataDir, `${fileName}.pdf`);
        if (!fs.existsSync(filePath)) {
            console.error(`Missing file: ${filePath}`);
            continue;
        }
        const pdfBuffer = fs.readFileSync(filePath);
        const data = await pdf(pdfBuffer);
        result[fileName.replace(/_/g, " ")] = data.text.replace(/\n\s*\n/g, "\n");
    }
    fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
    console.log(`✅ Extracted data saved to ${outputPath}`);
})();
