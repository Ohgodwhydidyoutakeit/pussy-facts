import { Route } from "@angular/router";
import { HomePageComponent } from "libs/pages/src/lib/pages/home-page/home-page.component";


export const PageRoutes: Route[] = [
    {
        path: "",
        component: HomePageComponent
    }
]