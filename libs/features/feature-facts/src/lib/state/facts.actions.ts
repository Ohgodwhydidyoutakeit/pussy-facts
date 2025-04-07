import { createAction, props } from "@ngrx/store";
import { ActionPayload } from "@pussy-facts/shared"
import { FactsRequestPayload } from "../domain/interfaces/facts-request.payload";
import { FACTS_STORE_KEY } from "../domain/consts/facts-store.key";
import { FactsResponsePayload } from "../domain/interfaces/facts-response.payload";



export class FactsActions {
    static requestFacts = createAction(
        `${FACTS_STORE_KEY} Get Facts`,
        props<ActionPayload<FactsRequestPayload>>()
    )


    static getFactsSuccess = createAction(
        `${FACTS_STORE_KEY} Get Facts Success`,
        props<ActionPayload<FactsResponsePayload>>()
    )


    static getFactsFailed = createAction(
        `${FACTS_STORE_KEY} Get Facts Failed`,
        props<ActionPayload<any>>()
    )
}



