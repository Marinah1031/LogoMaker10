//
const inquirer = require("inquirer");
const {SVG} = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");


class CLI {
    async run() {
        try {
            const { text, textColor, shapeType, shapeColor } = await inquirer.prompt([
                {
                    name: "text",
                    type: "input",
                    message: "Enter the text you want to add to your svg file. (Must be less than 4 characters.)",
                    validate: (text) => text.length <= 3 || "The message must not have less than 4 characters",
                },
                {
                    name: "textColor",
                    type: "list",
                    message: "Choose a color you want for your text",
                    choices: ["green", "black", "red", "blue", "orange", "yellow", "purple"],
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
            ]);

            let shape;
            switch (shapeType) {
                case "circle":
                    shape = new Circle();
                    break;
                case "square":
                    shape = new Square();
                    break;
                default:
                    shape = new Triangle();
                    break;
            }
            shape.setColor(shapeColor);

            const svg = new SVG();
            svg.setText(text, textColor);
            svg.setShape(shape);
            
            await writeFile("logo.svg", svg.render());
            console.log("Generated logo.svg");
        } catch (error) {
            console.log(error);
            console.log("Sorry, something went wrong.");
        }
    }
}



module.exports = CLI;