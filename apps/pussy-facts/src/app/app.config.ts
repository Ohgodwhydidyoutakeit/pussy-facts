import { ApplicationConfig, isDevMode, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';
import { TranslocoHttpLoader } from '@pussy-facts/transloco';
import { provideTransloco } from '@jsverse/transloco';
import { AuthStoreProviders } from '@pussy-facts/auth'
export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(), // this is experimental api 
    provideRouter(appRoutes),
    // transloco stuff
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: ['en'],
        defaultLang: 'en',
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader
    }),
    // store stuff
    provideStore(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
    AuthStoreProviders
  ],
};
