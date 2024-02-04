// languageUtils.test.ts
import { validateAndSetLanguage } from './languageUtils';

describe('validateAndSetLanguage', () => {
  it('should return the provided langcode if valid', () => {
    const validLangCode = 'fr';
    const result = validateAndSetLanguage(validLangCode);
    expect(result).toEqual(validLangCode);
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
