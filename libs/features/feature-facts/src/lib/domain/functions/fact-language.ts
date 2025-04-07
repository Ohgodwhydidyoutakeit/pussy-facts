import { AcceptedLanguages } from "../interfaces/facts.language";



export function FactsLanguage(selectedLanguage: string): AcceptedLanguages {
    if (selectedLanguage in AcceptedLanguages) {
        return selectedLanguage as AcceptedLanguages;
    }
    return AcceptedLanguages.default;
}