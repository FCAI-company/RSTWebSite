"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const pdf_parse_1 = __importDefault(require("pdf-parse"));
const info_1 = require("../src/app/info/info");
const dataDir = path_1.default.join(process.cwd(), "public", "data");
const outputPath = path_1.default.join(process.cwd(), "public", "pdf-data.json");
(async () => {
    let result = {};
    for (const fileName of info_1.Faculties) {
        const filePath = path_1.default.join(dataDir, `${fileName}.pdf`);
        if (!fs_1.default.existsSync(filePath)) {
            console.error(`Missing file: ${filePath}`);
            continue;
        }
        const pdfBuffer = fs_1.default.readFileSync(filePath);
        const data = await (0, pdf_parse_1.default)(pdfBuffer);
        result[fileName.replace(/_/g, " ")] = data.text.replace(/\n\s*\n/g, "\n");
    }
    fs_1.default.writeFileSync(outputPath, JSON.stringify(result, null, 2));
    console.log(`✅ Extracted data saved to ${outputPath}`);
})();
