import express from 'express';
import path from 'path';
import fs from 'fs';
import { resizeImage } from '../../utilities/imageProcessing.js';

const routes = express.Router();

routes.get('/images', async (req, res): Promise<void> => {
  const filename = req.query.filename as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  if (!filename || !width || !height) {
    res.status(400).send('Please provide filename, width, and height');
    return;
  }

  const inputPath = path.resolve(`images/full/${filename}.webp`);
  const outputPath = path.resolve(`images/updated/${filename}-${width}x${height}.webp`);

  if (!fs.existsSync(inputPath)) {
    console.log("inputPath is  ", inputPath);
    res.status(404).send('Image not found ');
    return;
  }

  if (fs.existsSync(outputPath)) {
    res.sendFile(outputPath);
    return;
  }

  try {
    await resizeImage(inputPath, outputPath, width, height);
    res.sendFile(outputPath);
  } catch (err) {
    res.status(500).send('Error processing image');
  }
});

export default routes;
