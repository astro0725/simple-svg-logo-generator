const { TextValidator } = require('./file');

describe('Text Validator', () => {
    let textValidator;

    beforeEach(() => {
        textValidator = new TextValidator();
    });

    test.each([
        ['abc', true, 'valid text'],
        ['a', true, 'valid text'],
        ['ab', true, 'valid text'],
        ['123', true, 'valid text'],
        ['abc123', false, 'invalid text, too many characters'],
    ])('Text validation for input "%s" should return %s because it is a(n) %p', (input, expected, message) => {
        expect(textValidator.validateTextCase(input)).toBe(expected, message);
    });

    test.each([
        ['textcolor', 'red', true, 'valid color for text'],
        ['textcolor', '#00FF00', true, 'valid hex color for text'],
        ['textcolor', '#f0c', true, 'valid hex color for text'],
        ['textcolor', 'invalidcolor', false, 'invalid color for text'],
        ['textcolor', '#Z34FF9', false, 'invalid hex color for text'],
        ['textcolor', '#g12', false, 'invalid hex color for text'],
    ])('Color validation for text with input "%s" should return %s because it is a(n) %p', (color, expected, message) => {
        expect(textValidator.validateTextColor(color)).toBe(expected, message);
    });
});