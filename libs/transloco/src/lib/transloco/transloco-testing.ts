import { TranslocoTestingModule, TranslocoTestingOptions } from '@jsverse/transloco';

import * as en from './mock.json'

export function getTranslocoModule(options: TranslocoTestingOptions = {}) {
    return TranslocoTestingModule.forRoot({
        langs: { en },
        translocoConfig: {
            availableLangs: ['en'],
            defaultLang: 'en',
        },
        preloadLangs: true,
        ...options,
    });
}