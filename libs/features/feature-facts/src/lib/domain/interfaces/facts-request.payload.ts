import { AcceptedLanguages } from "./facts.language"



export interface FactsRequestPayload {
    numberOfFacts: number
    language: AcceptedLanguages
}