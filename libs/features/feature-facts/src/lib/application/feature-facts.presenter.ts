import { inject, Injectable } from "@angular/core";
import { TranslocoService } from "@jsverse/transloco";
import { AcceptedLanguages } from "../domain/interfaces/facts.language";
import { FactsLanguage } from "../domain/functions/fact-language";
import { FactsFacade } from "../state/facts.store-facade";
import { FIRST_REQUEST_ITEMS_LENGTH } from "../domain/consts/facts.consts";


@Injectable({
    providedIn: 'root'
})
export class FeatureFactsPresenter {
    readonly #activeLang = inject(TranslocoService).getActiveLang()
    readonly #factsState = inject(FactsFacade)


    getFacts$ = this.#factsState.getFacts$

    requestFacts() {
        this.#factsState.requestFacts({
            numberOfFacts: FIRST_REQUEST_ITEMS_LENGTH,
            language: this.getFactsLanguage()
        })
    }


    private getFactsLanguage(): AcceptedLanguages {
        return FactsLanguage(this.#activeLang)
    }
}