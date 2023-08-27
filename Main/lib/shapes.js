// Main class for the shapes
class Shape {
    constructor(color) {
        this.color = color ?? "red"; // position of shape on canvas
    }

    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color)
    }

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
        return `<rect x="90" y="40" width="100" height="120" fill="${this.color}" />`;
}
}
module.exports = {
    Circle,
    Triangle,
    Square 
}