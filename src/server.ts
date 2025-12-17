import 'zone.js/node';
import express from 'express';
import { join } from 'path';

const app = express();
const PORT = process.env['PORT'] || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist-prod');

app.set('views', join(DIST_FOLDER, 'browser'));

app.get(
  '*.*',
  express.static(join(DIST_FOLDER, 'browser'), {
    maxAge: '1y',
  }),
);

app.get('*', (req, res) => {
  res.sendFile(join(DIST_FOLDER, 'browser', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export { app };
