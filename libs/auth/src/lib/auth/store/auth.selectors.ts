import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthKey } from "../keys/auth-key";
import { AuthState } from "../domain/auth-state";



export const selectAuthState = createFeatureSelector<AuthState>(
    AuthKey
)

const selectIsLoggedIn = createSelector(
    selectAuthState,
    (state) => state.isLoggedIn
)


const selectUsername = createSelector(
    selectAuthState,
    (state) => state.userName
)



export const AuthQuery = {
    selectIsLoggedIn,
    selectUsername
}
