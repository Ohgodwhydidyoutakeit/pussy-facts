import { createFeature, provideState } from "@ngrx/store";
import { FACTS_STORE_KEY } from "../domain/consts/facts-store.key";
import { FactsReducer } from "../state/facts.reducer";
import { EnvironmentProviders } from "@angular/core";
import { provideEffects } from "@ngrx/effects";
import { FactsEffects } from "../state/facts.effects";
import { FactsQuery } from "../state/facts.selectors";





const FactsFeature = createFeature({
    name: FACTS_STORE_KEY,
    reducer: FactsReducer,
    extraSelectors: () => FactsQuery
})


export const FactsStoreProviders: EnvironmentProviders[] = [
    provideState(FactsFeature),
    provideEffects(FactsEffects)
]