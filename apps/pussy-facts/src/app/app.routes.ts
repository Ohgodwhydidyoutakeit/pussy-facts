import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import("@pussy-facts/pages").then(m => m.PageRoutes)
    }
];
