import { inject, Injectable } from "@angular/core";
import { TranslocoService } from "@jsverse/transloco";
import { Observable } from "rxjs";

import { HttpClient } from "@angular/common/http"
import { FactsRequestPayload } from "../domain/interfaces/facts-request.payload";
import { URL } from "../domain/consts/facts.consts";
import { FactsResponsePayload } from "../domain/interfaces/facts-response.payload";




@Injectable({
    providedIn: 'root'
})
export class FactsDataService {

    readonly #httpCLient = inject(HttpClient)
    requestFacts(payload: FactsRequestPayload): Observable<FactsResponsePayload> {
        return this.#httpCLient.get<FactsResponsePayload>(URL, {
            params: {
                count: payload.numberOfFacts,
                lang: payload.language
            }
        })
    }
}

