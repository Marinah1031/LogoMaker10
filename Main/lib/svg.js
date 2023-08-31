//this class is defined that accepts the "shape" parameter. 
//The constructor initalizes this property
class SVG {
    constructor(shape) {
        this.shape = shape
    }
    //By rendering, it creates the svg markup for the graphics and it is able to take in more specific
    //details of the height, width, etc, to customize the shape.
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.shape.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>  
        `
    }

//The text is set using the properties of the colors provided, and same is applied to the shape
    setText(text, textColor) {
        this.text = text
        this.textColor = textColor
    }

    setShape(shape) {
        this.shape = shape
    }
}
//exporting the svg class by using the module.exports makes it available for the other modules to use. 
module.exports = { SVG }