import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AuthQuery } from "./auth.selectors";





@Injectable({
    providedIn: 'root'
})
export class AuthFacade {

    readonly #store = inject(Store)

    isLoggedIn$ = this.#store.select(AuthQuery.selectIsLoggedIn)
}