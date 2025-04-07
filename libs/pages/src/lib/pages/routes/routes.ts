import { Route } from "@angular/router";
import { HomePageComponent } from "../home-page/home-page.component";
import { FactsPageComponent } from "../facts-page/facts-page.component";
import { RedirectPageComponent } from "../redirect-page/redirect-page.component";
import { LoginGuard } from "./guards/login-guard";


export const PageRoutes: Route[] = [
    {
        path: "",
        loadComponent: () => { return import('../home-page/home-page.component').then((component) => component.HomePageComponent) }
    },
    {
        path: 'facts',
        loadComponent: () => { return import('../facts-page/facts-page.component').then((component) => component.FactsPageComponent) },
        canActivate: [LoginGuard]
    },
    {
        path: '**',
        loadComponent: () =>
            import('../redirect-page/redirect-page.component').then(
                (c) => c.RedirectPageComponent
            )
    }
]