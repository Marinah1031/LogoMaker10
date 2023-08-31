// Main class for the shapes
class Shape {
    constructor(color) {
        this.color = color ?? "red"; // position of shape on canvas
    }
// This sets the color property of the shape 
    setColor(color) {
        this.color = color;
    }
}
//Each of the classes that are set makes an extention to the shape class which inherits the properties and methods
//that are created in it.
class Circle extends Shape {
    constructor(color) {
        super(color)
    }
//the render method returns the SVG style for that designated shape with a this.color property
    render() {
        return `

        <circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color)
    }
    render() {
        return `
        <polygon points="150, 20 250, 180 55, 180" fill="${this.color}"/>`;
    }
}

class Square extends Shape {
    constructor(color) {
        super(color)
    }
    render() {
        return `<rect x="90" y="45" width="125" height="125" fill="${this.color}" />`;
}
}

//expriting the three shapes are exported from the module.exports which makes them available for the other modules to import.
module.exports = {
    Circle,
    Triangle,
    Square 
}