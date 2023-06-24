const fs = require("fs");
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const questions = require("./lib/questions");
// const shapes = require("./lib/shapes");
const Square = require("./lib/shapes");
const Circle = require("./lib/shapes");
const Triangle = require("./lib/shapes");

// prompt(questions).then((answers) => {
//     const test = new Circle(answers.text, answers.textColor, answers.shape, answers.shapeColor);
//     test.render();
//     }
// );
prompt(questions).then((answers) => {
    const key = answers.shape;
    switch (key) {
        case 'Square':
            const square = new Square(answers.text, answers.textColor, answers.shape, answers.shapeColor);
            square.render();
            break;
        case 'Circle':
            const circle = new Circle(answers.text, answers.textColor, answers.shape, answers.shapeColor);
            circle.render();
            break;
        case 'Triangle':
            const triangle = new Triangle(answers.text, answers.textColor, answers.shape, answers.shapeColor);
            triangle.render();
            break;
    }
    }
);