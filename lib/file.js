class ColorValidator {
    validateColor(shape, color) {
        if (shape === 'Triangle' || shape === 'Circle' || shape === 'Square') {
            const validColors = ['red', 'blue', 'green', 'yellow', 'magenta', 'cyan', 'purple', 'orange', 'pink', 'brown', 'black', 'white', 'gray', 'grey'];

            if (validColors.includes(color)) {
                return true; 
            }

            const validHexCodes = /^#([0-9A-Fa-f]{3}){1,2}$/;
            if (validHexCodes.test(color)) {
                return true; 
            }
            console.log('Invalid color for a' + shape);
        }
        return false;
    }
}

class TextValidator {
    constructor() {
        this.colorValidator = new ColorValidator();
    }

    validateTextCase(text) {
        if (text === 'text') {
            const pattern = /^[a-zA-Z0-9]{1,3}$/;
            if (pattern.test(text)) {
                return true;
            } else {
                console.log('Too many characters');
                return false;
            }
        }
        return false;
    }

    validateTextColor(text, color) {
            return this.colorValidator.validateTextColor(text, color);
    }
}


module.exports = {
    ColorValidator,
    TextValidator
};