// imports/dependancies to be used below
const fs = require("fs");
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const questions = require("./lib/questions");
const { Square, Circle, Triangle } = require("./lib/shapes");
const { genSVGSqr, genSVGCir, genSVGTri } = require("./lib/genSVG");

// inquirer prompt to get answers from user
prompt(questions).then((answers) => {
    // force answers.text to be uppercase
    answers.text = answers.text.toUpperCase();
    // change text to only be first 3 letters of input if someone enters too much
    if (answers.text.length > 3) {
        answers.text = answers.text.slice(0,3);
        console.log(`You entered too much text, I shortened it to '${answers.text}' for you.`);
    }
    // console.log and return if any field is left empty
    if (answers.text === "" || answers.textColor === "" || answers.shapeColor === "") {
        console.log("You didn't enter anything in the entry fields. Please start over by entering 'node index.js' in the terminal.");
        return;
    } 
    // variables to be used in generation
    let key = answers.shapeName;
    let shape;
    if (key === 'Square') {
        shape = new Square(answers.text, answers.textColor, answers.shapeColor);
        const logo = genSVGSqr(shape.text, shape.textColor, shape.shapeColor);
        fs.writeFileSync('./dist/logo.svg', logo);
    } else if (key === 'Circle') {
        shape = new Circle(answers.text, answers.textColor, answers.shapeColor);
        const logo = genSVGCir(shape.text, shape.textColor, shape.shapeColor);
        fs.writeFileSync('./dist/logo.svg', logo);
    } else if (key === 'Triangle') {
        shape = new Triangle(answers.text, answers.textColor, answers.shapeColor);
        const logo = genSVGTri(shape.text, shape.textColor, shape.shapeColor);
        fs.writeFileSync('./dist/logo.svg', logo);
    } else {
        console.log("big time error. how did you even get here?");
    }
    console.log("Generated logo.svg!")
})