import { Route } from "@angular/router";
import { HomePageComponent } from "../home-page/home-page.component";
import { FactsPageComponent } from "../facts-page/facts-page.component";


export const PageRoutes: Route[] = [
    {
        path: "",
        component: HomePageComponent
    },
    {
        path: 'facts',
        component: FactsPageComponent
    }
]