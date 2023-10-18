const { Triangle, Circle, Square } = require('./shapes');

class ColorShapeValidator {
    validateColorForShape(shape, color) {
        if (shape === 'Triangle' || shape === 'Circle' || shape === 'Square') {
            const validColors = ['red', 'blue', 'green', 'yellow', 'magenta', 'cyan', 'purple', 'orange', 'pink', 'brown', 'black', 'white', 'gray', 'grey'];

            if (validColors.includes(color)) {
                return true; 
            }

            const validHexCodes = /^#([0-9A-Fa-f]{3}){1,2}$/;
            if (validHexCodes.test(color)) {
                return true; 
            }
        }
        return false;
    }
}

describe('Color and Shape Validator', () => {
    let colorShapeValidator;

    beforeEach(() => {
        colorShapeValidator = new ColorShapeValidator();
    });

    test.each([
        ['Triangle', 'red', true, 'valid color for a Triangle'],
        ['Triangle', '#00FF00', true, 'valid hex color for a Triangle'],
        ['Triangle', '#f0c', true, 'valid hex color for a Triangle'],
        ['Triangle', 'purplee', false, 'invalid color for a Triangle'],
        ['Triangle', '#llllll', false, 'invalid hex color for a Triangle'],
        ['Triangle', 'zzz', false, 'invalid hex color for a Triangle'],
        ['Trianglee', '#000', false, 'invalid shape'],
        ['Circle', 'blue', true, 'valid color for a Circle'],
        ['Circle', '#00FF00', true, 'valid hex color for a Circle'],
        ['Circle', '#f0c', true, 'valid hex color for a Circle'],
        ['Circle', 'blee', false, 'invalid color for a Circle'],
        ['Circle', '#Z34FF9', false, 'invalid hex color for a Circle'],
        ['Circle', '#g99', false, 'invalid hex color for a Circle'],
        ['Circlee', '#000', false, 'invalid shape'],
        ['Square', 'yellow', true, 'valid color for a Square'],
        ['Square', '#00FF00', true, 'valid hex color for a Square'],
        ['Square', '#f0c', true, 'valid hex color for a Square'],
        ['Square', '#Z34FF9', false, 'invalid hex color for a Square'],
        ['Square', '#g12', false, 'invalid hex color for a Square'],
        ['Square', '#jjjjjj', false, 'invalid hex color for a Square'],
        ['Squaree', '#000', false, 'invalid shape'],
    ])('Color validation for %s with input "%s" should return %s because it is a(n) %p', (shape, color, expected, message) => {
        expect(colorShapeValidator.validateColorForShape(shape, color)).toBe(expected, message);
    });
});