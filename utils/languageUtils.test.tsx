// languageUtils.test.ts
import { validateAndSetLanguage } from './languageUtils';

describe('validateAndSetLanguage', () => {
  // List of supported language codes
  var supportedLanguages = ['hi', 'es', 'fr', 'de', 'it', 'ja', 'ko', 'pt', 'ru', 'zh', 'ar', 'en', 'nl'];

  supportedLanguages.forEach(langcode => {
    it(`should return the '${langcode}', if provided '${langcode}' langcode`, () => {
      const result = validateAndSetLanguage(langcode);
      expect(result).toEqual(langcode);
    });
  });

  it('should throw an error if the provided langcode is invalid', () => {
    const invalidLangCode = 'invalid';
    expect(() => validateAndSetLanguage(invalidLangCode)).toThrow();
  });

  it('should return the default langcode if no langcode is provided', () => {
    const result = validateAndSetLanguage('');
    expect(result).toEqual('en'); // Assuming 'en' is the default langcode
  });

  it('should return the default langcode if langcode is null', () => {
    const result = validateAndSetLanguage(null as any);
    expect(result).toEqual('en'); // Assuming 'en' is the default langcode
  });

  it('should return the default langcode if langcode is undefined', () => {
    const result = validateAndSetLanguage(undefined as any);
    expect(result).toEqual('en'); // Assuming 'en' is the default langcode
  });

  // Add more test cases as needed
});
