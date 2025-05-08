import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ProductService } from './services/product.service';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { Constants } from './core/models/constants';
import { ApiHttpService } from './core/services/api-http.service';
import { UrlBuilderService } from './core/services/url-builder.service';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    ProductService,
    provideHttpClient(),
    Constants,
    ApiHttpService,
    UrlBuilderService,
    provideAnimations(),
  ]
};
