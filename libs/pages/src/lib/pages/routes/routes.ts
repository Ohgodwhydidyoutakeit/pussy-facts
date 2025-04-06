import { Route } from "@angular/router";
import { HomePageComponent } from "../home-page/home-page.component";
import { FactsPageComponent } from "../facts-page/facts-page.component";
import { RedirectPageComponent } from "../redirect-page/redirect-page.component";
import { LoginGuard } from "./guards/login-guard";


export const PageRoutes: Route[] = [
    {
        path: "",
        component: HomePageComponent
    },
    {
        path: 'facts',
        component: FactsPageComponent,
        canActivate: [LoginGuard]
    },
    {
        path: '**',
        component: RedirectPageComponent
    }
]