import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FactsState } from "../domain/interfaces/facts-state";
import { FACTS_STORE_KEY } from "../domain/consts/facts-store.key";



// maybe use some entityManager from ngrx?

export const selectFactsState = createFeatureSelector<FactsState>(
    FACTS_STORE_KEY
)

const selectFacts = createSelector(
    selectFactsState,
    (state) => state.facts
)

const selectIsLoading = createSelector(
    selectFactsState,
    (state) => state.isLoading
)
export const FactsQuery = {
    selectFacts,
    selectIsLoading
}
