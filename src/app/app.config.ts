import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { reducer } from './components/store/reducers';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

const devtools = !environment.production
  ? [
      provideStoreDevtools({
        maxAge: 25,
        logOnly: environment.production,
      }),
    ]
  : [];

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ multiStepFormData: reducer }),
    ...devtools,
  ],
};
