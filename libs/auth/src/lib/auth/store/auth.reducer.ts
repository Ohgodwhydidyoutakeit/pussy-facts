import { createReducer, on } from "@ngrx/store";
import { AuthActions } from './auth.actions';


export interface AuthState {
    isLoggedIn: boolean
}

const initialState: AuthState = {
    isLoggedIn: false
}

export const AuthReducer = createReducer(
    initialState,
    on(AuthActions.login, (state) => ({
        ...state,
        isLoggedIn: true,
    })),
    on(AuthActions.logout, (state) => ({
        ...state,
        isLoggedIn: false,
    }))
);