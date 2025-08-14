"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const info_1 = require("../src/app/info/info");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const pdf_parse_1 = __importDefault(require("pdf-parse"));
(async () => {
    const dataDir = path_1.default.join(process.cwd(), "public", "data");
    let context = "";
    console.log(info_1.Faculties);
    for (const fileName of info_1.Faculties) {
        console.log(fileName);
        const filePath = path_1.default.join(dataDir, `${fileName}.pdf`);
        console.log(filePath);
        if (!fs_1.default.existsSync(filePath))
            continue;
        const pdfBuffer = fs_1.default.readFileSync(filePath);
        const data = await (0, pdf_parse_1.default)(pdfBuffer);
        context +=
            fileName.replace(/_/g, " ") + data.text.replace(/\n\s*\n/g, "\n");
    }
    const outputPath = path_1.default.join(process.cwd(), "public", "pdf-data.json");
    fs_1.default.writeFileSync(outputPath, JSON.stringify(context, null, 2));
    return context;
})();
