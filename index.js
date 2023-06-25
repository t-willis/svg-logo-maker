const fs = require("fs");
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const questions = require("./lib/questions");
const { Square, Circle, Triangle } = require("./lib/shapes");
const { genSVGSqr, genSVGCir, genSVGTri } = require("./lib/genSVG");

prompt(questions).then((answers) => {
    answers.text = answers.text.toUpperCase();
    const hasNumber = /\d/;
    if (answers.text.length > 3) {
        answers.text = answers.text.slice(0,3);
        console.log(`You entered too much text, I shortened it to '${answers.text}' for you.`);
    }
    if (hasNumber.test(answers.textColor)) {
        answers.textColor = `#${answers.textColor}`;
        console.log(`You seem to have entered a hex color code but didn't add a #! Don't worry, I fixed it for you.`)
    }
    if (hasNumber.test(answers.shapeColor)) {
        answers.textColor = `#${answers.shapeColor}`;
        console.log(`You seem to have entered a hex color code but didn't add a #! Don't worry, I fixed it for you.`)
    }
    if (answers.text === "" || answers.textColor === "" || answers.shapeColor === "") {
        console.log("You didn't enter anything in the entry fields!");
        return;
    } 
    let key = answers.shapeName;
    let shape;
    if (key === 'Square') {
        shape = new Square(answers.text, answers.textColor, answers.shapeName, answers.shapeColor);
        const test = genSVGSqr(shape.text, shape.textColor, shape.shapeColor);
        fs.writeFileSync('./dist/logo.svg', test);
    } else if (key === 'Circle') {
        shape = new Circle(answers.text, answers.textColor, answers.shapeName, answers.shapeColor);
        const test = genSVGCir(shape.text, shape.textColor, shape.shapeColor);
        fs.writeFileSync('./dist/logo.svg', test);
    } else if (key === 'Triangle') {
        shape = new Triangle(answers.text, answers.textColor, answers.shapeName, answers.shapeColor);
        const test = genSVGTri(shape.text, shape.textColor, shape.shapeColor);
        fs.writeFileSync('./dist/logo.svg', test);
    } else {
        console.log("big time error. how did you even choose NOT an option?");
    }
    console.log("Generated logo.svg!")
})