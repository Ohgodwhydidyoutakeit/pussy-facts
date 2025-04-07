import { FactsState } from "../domain/interfaces/facts-state";
import { createReducer, on, State } from '@ngrx/store'
import { FactsActions } from "./facts.actions";



const initialState: FactsState = {
    isLoading: true,
    isError: false,
    facts: []
}


export const FactsReducer = createReducer(
    initialState,
    on(FactsActions.getFactsSuccess, (state, { payload }) => ({
        ...state,
        isLoading: false,
        isError: false,
        facts: payload.data
    })),
    on(FactsActions.getFactsFailed, (state) => ({
        ...state,
        isLoading: true,
        isError: true,
    }))
)