import path from "path";
import fs from "fs";
import { resizeImage } from "../utilities/imageProcessing.js";

describe("Image processing", () => {
  const inputPath = path.resolve("images/full/backpack.webp");
  const outputPath = path.resolve("images/updated/backpack-200x200.webp");

  it("should resize image correctly", async () => {
    await resizeImage(inputPath, outputPath, 100, 100);
    expect(fs.existsSync(outputPath)).toBeTruthy();
  });
});
