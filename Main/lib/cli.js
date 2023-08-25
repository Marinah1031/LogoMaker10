const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triable, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
    run() {
        return inquirer
        .promt([
            {
                name: "text",
                type:"input",
                message:
                "Enter the text you want to add to your svg file. (Must be more than 3 characters.)",
                validate: (text) =>
                    text.length <= 3 ||
                "The message must not have more than 3 characters",
            },
            {
                name: "textColor",
                type: "input",
                message: "Enter a text color"
            },
            {
                name: "shapeType",
                type: "list",
                message: 'Choose one of these shapes',
                choices: ["circle", "square", "triangle"],
            },
            {
                name: "shapeColor",
                type: "input",
                message: "Enter a shape color",
            },
        ])
        .then(({ text, textColor, shapeType, shapeColor }) => {
            let shape;
            switch (shapeType) {
                case "circle":
                    shape = new Circle();
                    break;

                case "square":
                    shape = new Square();
                    // console.log(shape);
                    break;
                
                default:
                    shape = new Triangle();
                    break;
            }
            shape.setColor(shapeColor);

            const svg = new SVG();
            svg.setText(text, textColor);
            svg.setShape(shape);
            return writeFile("logo.svg", svg.render());
        })
        .then(() => {
            console.log("Generated logo.svg");
        })
        .catch((error) => {
            console.log(error);
            console.log("Sorry, something went wrong.");
        });
    }
}

module.exports = CLI;