import path from 'path';
import fs from 'fs';
import { resizeImage } from '../utilities/imageProcessing.js';

describe('Image processing', () => {
  const inputPath = path.resolve('images/full/fjord.jpg');
  const outputPath = path.resolve('images/thumb/fjord-100x100.jpg');

  it('should resize image correctly', async () => {
    await resizeImage(inputPath, outputPath, 100, 100);
    expect(fs.existsSync(outputPath)).toBeTruthy();
  });
});
