"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const imageProcessing_js_1 = require("../utilities/imageProcessing.js");
describe('Image processing', () => {
    const inputPath = path_1.default.resolve('images/full/backpack.webp');
    const outputPath = path_1.default.resolve('images/updated/backpack-200x200.webp');
    it('should resize image correctly', async () => {
        await (0, imageProcessing_js_1.resizeImage)(inputPath, outputPath, 100, 100);
        expect(fs_1.default.existsSync(outputPath)).toBeTruthy();
    });
});
//# sourceMappingURL=imageSpec.js.map