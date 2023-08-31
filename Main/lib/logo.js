//The  packages that are used within this 
const inquirer = require("inquirer");
const {SVG} = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

//The code has a class named logo
class logo {
    //the async method called run is responsible for running the logo application
    async run() {
        try {
            //the inquirer.prompt() is gathering imput based on the array of questions down below.
            //The responses are going to collect information regaring the text, color, shape, and shape color.
            const { text, textColor, shapeType, shapeColor } = await inquirer.prompt([
                {
                    //the text in the logo
                    name: "text",
                    type: "input",
                    message: "Enter the text you want to add to your svg file. (Must be less than 4 characters.)",
                    validate: (text) => text.length <= 3 || "The message must not have less than 4 characters",
                },
                {
                    //color of the text
                    name: "textColor",
                    type: "list",
                    message: "Choose a color you want for your text",
                    choices: ["green", "black", "red", "blue", "orange", "yellow", "purple"],
                },
                {
                    //shape of the logo
                    name: "shapeType",
                    type: "list",
                    message: 'Choose one of these shapes',
                    choices: ["circle", "square", "triangle"],
                },
                {
                    //color of the shape
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
            //this is where the shape of the color is set
            shape.setColor(shapeColor);
            //the svg graffics are created and in the works from the package that is used.
            const svg = new SVG();
            svg.setText(text, textColor);
            svg.setShape(shape);
            //This generated the svg content to a new file named logo.svg by using the writeFile function 
            await writeFile("logo.svg", svg.render());
            //Once your logo is generating, this console log will get passed and you will see it display 
            console.log("Generated logo.svg");
            //error handeling, if there are any errors that occur.
        } catch (error) {
            console.log(error);
            console.log("Sorry, something went wrong.");
        }
    }
}


//making the value of this variable to be able to access other modules using the require function and connects the files together. 
module.exports = logo;