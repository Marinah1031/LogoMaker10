class SVG {
    constructor(shape) {
        this.shape = shape
    }
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.shape.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>  
        `
    }


    setText(text, textColor) {
        this.text = text
        this.textColor = textColor
    }

    setShape(shape) {
        this.shape = shape
    }
}

module.exports = { SVG }