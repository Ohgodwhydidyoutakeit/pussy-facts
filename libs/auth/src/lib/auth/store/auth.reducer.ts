import { createReducer, on } from "@ngrx/store";
import { AuthActions } from './auth.actions';
import { AuthState } from "../domain/auth-state";




const initialState: AuthState = {
    isLoggedIn: false,
    userName: ''
}

export const AuthReducer = createReducer(
    initialState,
    on(AuthActions.loginSuccess, (state, { payload }) => ({
        ...state,
        isLoggedIn: true,
        userName: payload.login
    })),
    on(AuthActions.logout, (state) => ({
        ...state,
        isLoggedIn: false,
        userName: ''
    }))
);