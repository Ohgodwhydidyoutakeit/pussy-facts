
import { createAction, props } from '@ngrx/store'
import { ActionPayload } from "@pussy-facts/shared"

const AuthActionsKey = '[Auth]'

export class AuthActions {
    static login = createAction(
        `${AuthActionsKey} Login`
    )

    static logout = createAction(
        `${AuthActionsKey} Logout`
    )
}