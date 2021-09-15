
import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {hmrBootstrap} from './hmr';

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule,{
  defaultEncapsulation: ViewEncapsulation.ShadowDom
});

if (environment.hmr === true) {
  if (module['hot']) {
    hmrBootstrap(module, bootstrap);
  } else {
    bootstrap().catch((err) => console.log(err));
  }
} else {
  bootstrap().catch((err) => console.log(err));
}


