import { inject } from "@angular/core";
import { CanActivateChildFn } from "@angular/router";
import { AuthFacade } from "@pussy-facts/auth";




export const LoginGuard: CanActivateChildFn = () => {

    const authFacade = inject(AuthFacade)

    return authFacade.isLoggedIn()
}