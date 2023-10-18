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

const generateSVG = (text, textColor, shape, shapeOutline, shapeFill) => {
    // initializing the svg string with size & xml namespace
    let svg = `<svg width="300px" height="200px" viewBox="0 0 15 10" xmlns="http://www.w3.org/2000/svg">`;

    // creating object to represent selected shape
    const shapeObj = {
        circle: new Circle(),
        triangle: new Triangle(),
        square: new Square(),
    };

    // setting the outline (stroke) and fill collors for the selected shape
    shapeObj[shape].setStroke(shapeOutline);
    shapeObj[shape].setFill(shapeFill);

    // getting svg code for the selected shape
    const shapeSvg = shapeObj[shape].render();

    // adding text to the selected shape
    svg += `<text x="10" y="20" fill="${textColor}">${text}</text>`;
    // adding svg code for selected shape
    svg += shapeSvg;
    // closing svg element
    svg += `</svg>`;

    return svg;
};

const saveSVGToFile = (text, svg) => {
    const filename = `${text}logo.svg`; // Use 'text' input as the filename
    fs.writeFileSync(filename, svg);
    console.log(`Generated ${filename}`);
};