// Main class for the shapes
class Shape {
    constructor(color) {
        this.color= color ?? "red"; // position of shape on canvas
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

        <circle cx="150" cy="100" r="80" fill="${this.color}" />

        
    `
  }
}

module.exports = {
    Circle,
    Shape
}