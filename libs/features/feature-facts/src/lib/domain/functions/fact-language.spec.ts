import { AcceptedLanguages } from '../interfaces/facts.language';
import { FactsLanguage } from './fact-language'

describe('FactsLanguage', () => {
  it('should return "eng" when "en" is passed', () => {
    expect(FactsLanguage('en')).toBe(AcceptedLanguages.eng);
  });

  it('should return "ukr" when "ukr" is passed', () => {
    expect(FactsLanguage('ukr')).toBe(AcceptedLanguages.ukr);
  });

  it('should return "rus" when "rus" is passed', () => {
    expect(FactsLanguage('rus')).toBe(AcceptedLanguages.rus);
  });

  it('should return default "en" when unsupported language is passed', () => {
    expect(FactsLanguage('de')).toBe(AcceptedLanguages.default);
  });

  it('should be case insensitive (e.g., "eng" returns "eng")', () => {
    expect(FactsLanguage('ENG')).toBe(AcceptedLanguages.eng);
  });

  it('should return default "en" when empty string is passed', () => {
    expect(FactsLanguage('')).toBe(AcceptedLanguages.default);
  });

  it('should return default "en" when null or undefined is passed', () => {
    // @ts-expect-error testing runtime behavior
    expect(FactsLanguage(null)).toBe(AcceptedLanguages.default);
    // @ts-expect-error testing runtime behavior
    expect(FactsLanguage(undefined)).toBe(AcceptedLanguages.default);
  });
});
