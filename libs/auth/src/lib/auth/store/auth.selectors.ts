import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducer";
import { AuthKey } from "../keys/auth-key";



export const selectAuthState = createFeatureSelector<AuthState>(
    AuthKey
)

const selectIsLoggedIn = createSelector(
    selectAuthState,
    (state) => state.isLoggedIn
)


export const AuthQuery = {
    selectIsLoggedIn
}
