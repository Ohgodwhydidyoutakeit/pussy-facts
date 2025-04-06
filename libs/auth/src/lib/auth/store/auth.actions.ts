
import { createAction } from '@ngrx/store'

const AuthActionsKey = '[Auth]'

export class AuthActions {
    static login = createAction(
        `${AuthActionsKey} Login`
    )

    static logout = createAction(
        `${AuthActionsKey} Logout`
    )
}