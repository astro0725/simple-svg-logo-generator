// defining base class "shape"
class Shape {
    // initializing fill and stroke properties
    constructor() {
        this.fill = '';
        this.stroke = '';
    }

    // method to set fill color properties
    setFill(fill) {
        this.fill = fill;
    }

    // method to set stroke color properties
    setStroke(stroke) {
        this.stroke = stroke;
    }

    // method that should be implemented by subclasses for rendering shapes
    render() {
        throw new Error('Render method must be implemented by subclasses');
    }
}

// defining sublass "triangle" that extends base class "shape"
class Triangle extends Shape {
    // using render method to generate triangle shape
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" stroke="${this.stroke}" fill="${this.fill}" />`;
    }
}

// defining subclass "circle" that extends base class "shape"
class Circle extends Shape {
    // using render method to generate circle shape
    render() {
        return `<circle cx="7.5" cy="7.5" r="7" stroke="${this.stroke}" fill="${this.fill}" />`;
    }
}

// defining subclass "square" that extends base class "shape"
class Square extends Shape {
    // using render method to generate square shape
    render() {
        return `<rect x="5" y="5" width="10" height="10" stroke="${this.stroke}" fill="${this.fill}" />`;
    }
}

module.exports = { Triangle, Circle, Square };