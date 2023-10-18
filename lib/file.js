class ColorValidator {
    validateColorForShape(shape, color) {
        if (shape === 'Triangle' || shape === 'Circle' || shape === 'Square' || text === 'textColor') {
            const validColors = ['red', 'blue', 'green', 'yellow', 'magenta', 'cyan', 'purple', 'orange', 'pink', 'brown', 'black', 'white', 'gray', 'grey'];

            if (validColors.includes(color)) {
                return true; 
            }

            const validHexCodes = /^#([0-9A-Fa-f]{3}){1,2}$/;
            if (validHexCodes.test(color)) {
                return true; 
            }
            console.log('Invalid color for a ' + shape);
        }
        return false;
    }
}

class textCase {
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
}

module.exports = {
    ColorValidator,
    textCase
};