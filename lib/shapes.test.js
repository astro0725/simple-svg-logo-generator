const { ColorValidator } = require('./file');

describe('Shape Color Validator', () => {
    let colorValidator;

    beforeEach(() => {
        colorValidator = new ColorValidator();
    });

    describe('Color Validator', () => {
        test.each([
            ['Triangle', 'red', true, 'valid color for a Triangle'],
            ['Triangle', '#00FF00', true, 'valid hex color for a Triangle'],
            ['Triangle', '#f0c', true, 'valid hex color for a Triangle'],
            ['Triangle', 'purplee', false, 'invalid color for a Triangle'],
            ['Triangle', '#llllll', false, 'invalid hex color for a Triangle'],
            ['Triangle', 'zzz', false, 'invalid hex color for a Triangle'],
            ['Circle', 'blue', true, 'valid color for a Circle'],
            ['Circle', '#00FF00', true, 'valid hex color for a Circle'],
            ['Circle', '#f0c', true, 'valid hex color for a Circle'],
            ['Circle', 'blee', false, 'invalid color for a Circle'],
            ['Circle', '#Z34FF9', false, 'invalid hex color for a Circle'],
            ['Circle', '#g99', false, 'invalid hex color for a Circle'],
            ['Square', 'yellow', true, 'valid color for a Square'],
            ['Square', '#00FF00', true, 'valid hex color for a Square'],
            ['Square', '#f0c', true, 'valid hex color for a Square'],
            ['Square', 'yelllow', false, 'invalid color for a Square'],
            ['Square', '#Z34FF9', false, 'invalid hex color for a Square'],
            ['Square', '#g12', false, 'invalid hex color for a Square'],
        ])('Color validation for %s with input "%s" should return %s because it is a(n) %p', (shape, color, expected, message) => {
            expect(colorValidator.validateColor(shape, color)).toBe(expected, message);
        });
    });
});