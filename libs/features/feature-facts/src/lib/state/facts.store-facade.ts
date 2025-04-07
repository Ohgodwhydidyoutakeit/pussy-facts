import { inject, Injectable } from "@angular/core";
import { FactsRequestPayload } from "../domain/interfaces/facts-request.payload";
import { Store } from "@ngrx/store";
import { FactsActions } from "./facts.actions";
import { FactsQuery } from "./facts.selectors";



// this approach is mostly for "larger" global stores, here componentStore/signalStore would suffice 
@Injectable({
    providedIn: 'root'
})
export class FactsFacade {

    readonly #store = inject(Store)


    getFacts$ = this.#store.select(FactsQuery.selectFacts)

    
    requestFacts(payload: FactsRequestPayload) {
        this.#store.dispatch(FactsActions.requestFacts({ payload }))
    }
}