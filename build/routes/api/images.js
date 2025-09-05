"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const imageProcessing_js_1 = require("../../utilities/imageProcessing.js");
const routes = express_1.default.Router();
routes.get('/images', async (req, res) => {
    const filename = req.query.filename;
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    if (!filename || !width || !height) {
        res.status(400).send('Please provide filename, width, and height');
        return;
    }
    const inputPath = path_1.default.resolve(`images/full/${filename}.webp`);
    const outputPath = path_1.default.resolve(`images/updated/${filename}-${width}x${height}.webp`);
    if (!fs_1.default.existsSync(inputPath)) {
        console.log("inputPath is  ", inputPath);
        res.status(404).send('Image not found ');
        return;
    }
    if (fs_1.default.existsSync(outputPath)) {
        res.sendFile(outputPath);
        return;
    }
    try {
        await (0, imageProcessing_js_1.resizeImage)(inputPath, outputPath, width, height);
        res.sendFile(outputPath);
    }
    catch (err) {
        res.status(500).send('Error processing image');
    }
});
exports.default = routes;
//# sourceMappingURL=images.js.map