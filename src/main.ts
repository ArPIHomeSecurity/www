import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Note: platformBrowserDynamic is deprecated in favor of bootstrapApplication for standalone components
// For module-based applications, this remains the correct approach
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err: unknown) => console.error(err));
