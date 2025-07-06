import 'zone.js/node';
import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import express from 'express';
import { join } from 'path';
import { AppServerModule } from './app/app.module.server';

const app = express();
const PORT = process.env['PORT'] || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist-prod');

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModule,
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {
  maxAge: '1y'
}));

app.get('*', (req, res) => {
  res.render('index', { 
    req, 
    providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] 
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export { app };
