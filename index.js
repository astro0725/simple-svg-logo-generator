const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

const promptUser = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the text: ',
        validate: (input) => /^[a-zA-Z0-9]{1,3}$/.test(input),
        },
        {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (color name or hex): ',
        },
        {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['circle', 'triangle', 'square'],
        },
        {
        type: 'input',
        name: 'shapeOutline',
        message: 'Enter the outline color (color name or hex): ',
        },
        {
        type: 'input',
        name: 'shapeFill',
        message: 'Enter the fill color (color name or hex): ',
        },
    ]);
};