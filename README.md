# Simple SVG Logo Generator<br/>
A Node.js CLI tool for generating customizable SVG logos with text, shapes, and colors.

## Features
Choose from three shapes: Circle, Triangle, or Square.
Customize text, text color, shape fill, and outline colors.
Validates inputs to ensure proper text length and color values.
Saves the generated logo as an SVG file.

## Prerequisites
Node.js (version 12.x or higher)
npm (comes with Node.js)

## Installation
1. Clone the repository:
`git clone https://github.com/astro0725/simple-svg-logo-generator.git`
2. Navigate to the project directory:
`cd simple-svg-logo-generator`
3. Install dependencies:
`npm install`

## Usage
1. Run the application in your terminal:
`node index.js`

2. Follow the prompts to:
- Enter up to three characters for the logo text.
- Choose the text color (name or hex code).
- Select a shape (circle, triangle, or square).
- Define the outline color for the shape (name or hex code).
- Define the fill color for the shape (name or hex code).
- The SVG file will be generated and saved in the current directory with a name based on your input (e.g., ABClogo.svg).

Example
Here’s an example of the process:
```
Enter up to three characters for the text: ABC
Enter the text color (color name or hex): #ff0000
Select a shape:
  - circle
  - triangle
  - square
Enter the outline color (color name or hex): #000000
Enter the fill color (color name or hex): #00ff00
Your SVG named ABClogo.svg has been generated.
```
This will create an SVG logo with the text "ABC" in red, with a green shape and a black outline.

## License
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) 
This project is licensed under the MIT license. For more details, see [this link](https://opensource.org/licenses/MIT).
