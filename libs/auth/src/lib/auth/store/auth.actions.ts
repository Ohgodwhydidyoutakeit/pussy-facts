
import { createAction, props } from '@ngrx/store'
import { ActionPayload } from "@pussy-facts/shared"
import { LoginPayload } from '../domain/login-payload'
import { LoginSuccessPayload } from '../domain/login-success-payload'


const AuthActionsKey = '[Auth]'


// we wont have here a login faled method
export class AuthActions {
    static login = createAction(
        `${AuthActionsKey} Login`,
        props<ActionPayload<LoginPayload>>()
    )
    static loginSuccess = createAction(
        `${AuthActionsKey} Login Success`,
        props<ActionPayload<LoginSuccessPayload>>()
    )

    static logout = createAction(
        `${AuthActionsKey} Logout`
    )
}