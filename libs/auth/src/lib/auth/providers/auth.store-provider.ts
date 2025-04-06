import { EnvironmentProviders } from "@angular/core";
import { createFeature, provideState } from "@ngrx/store";
import { AuthKey } from "../keys/auth-key";
import { AuthReducer } from "../store/auth.reducer";
import { AuthQuery } from "../store/auth.selectors";


const AuthFeature = createFeature({
    name: AuthKey,
    reducer: AuthReducer,
    extraSelectors: () => AuthQuery
})

export const AuthStoreProviders: EnvironmentProviders = provideState(AuthFeature)