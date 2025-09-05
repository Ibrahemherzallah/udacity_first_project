import express from 'express';
import routes from './routes/api/images.js';

const app = express();
const port = 3000;

app.use('/api', routes);

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});

export default app;
