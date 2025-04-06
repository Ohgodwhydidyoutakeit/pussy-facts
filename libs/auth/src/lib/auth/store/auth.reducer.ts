import { createFeature, createReducer, on } from "@ngrx/store";
import { AuthActions } from "libs/auth/src/lib/auth/store/auth.actions";


export interface Auth {
    isLoggedIn: boolean
}


const initialState: Auth = {
    isLoggedIn: false
}


export const AuthFeature = createFeature({
    name: 'Auth',
    reducer: createReducer(
        initialState,
        on(AuthActions.login, (state) => ({
            ...state,
            isLoggedIn: true,
        })),
        on(AuthActions.logout, (state) => ({
            ...state,
            isLoggedIn: false,
        }))
    ),
});