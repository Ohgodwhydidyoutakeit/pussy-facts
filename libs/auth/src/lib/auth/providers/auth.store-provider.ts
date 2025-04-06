import { EnvironmentProviders } from "@angular/core";
import { provideState } from "@ngrx/store";
import { AuthFeature } from "../store/auth.reducer";




export const AuthStoreProviders: EnvironmentProviders = provideState(AuthFeature)