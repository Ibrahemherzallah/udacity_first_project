import sharp from "sharp";

export const resizeImage = async (
  inputPath: string,
  outputPath: string,
  width: number,
  height: number
): Promise<void> => {
  console.log("inputPath in imageProcessing is  ", inputPath);
  console.log("outputPath in imageProcessing is  ", outputPath);

  await sharp(inputPath).resize(width, height).toFile(outputPath);
};
