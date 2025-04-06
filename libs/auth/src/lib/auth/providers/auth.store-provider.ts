import { EnvironmentProviders } from "@angular/core";
import { provideEffects } from "@ngrx/effects";
import { createFeature, provideState } from "@ngrx/store";
import { AuthKey } from "../keys/auth-key";
import { AuthEffects } from "../store/auth.effects";
import { AuthReducer } from "../store/auth.reducer";
import { AuthQuery } from "../store/auth.selectors";
import { getInitialAuthState } from "../store/load-auth-from-localstorage";


const AuthFeature = createFeature({
    name: AuthKey,
    reducer: AuthReducer,
    extraSelectors: () => AuthQuery,
},)

export const AuthStoreProviders: EnvironmentProviders[] = [
    // why would i even create a feature 2 lines above? if i have to manually pass the object? Gotta look into this
    provideState(AuthFeature.name, AuthFeature.reducer, {
        initialState: getInitialAuthState()
    }),
    provideEffects(AuthEffects),

]

