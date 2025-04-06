import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AuthQuery } from "./auth.selectors";
import { AuthActions } from "./auth.actions";
import { LoginPayload } from "../domain/login-payload";





@Injectable({
    providedIn: 'root'
})
export class AuthFacade {

    readonly #store = inject(Store)

    logIn(payload: LoginPayload): void {
        this.#store.dispatch(AuthActions.login({ payload }))
    }

    logout(): void {
        this.#store.dispatch(AuthActions.logout())
    }


    isLoggedIn = this.#store.selectSignal(AuthQuery.selectIsLoggedIn)

    selectUserName$ = this.#store.select(AuthQuery.selectUsername)
}