const fs = require("fs");
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const questions = require("./lib/questions");
const { Shape, Square, Circle, Triangle } = require("./lib/shapes");
const { genSVGSqr, genSVGCir, genSVGTri } = require("./lib/genSVG");
// const genSVGSqr = require("./lib/genSVG");
// const genSVGCir = require("./lib/genSVG");
// const genSVGTri = require("./lib/genSVG");

// prompt(questions).then((answers) => {
//     const test = new Circle(answers.text, answers.textColor, answers.shape, answers.shapeColor);
//     test.render();
//     }
// );
// prompt(questions).then((answers) => {
//     const key = answers.shape;
//     switch (key) {
//         case 'Square':
//             const square = new Square(answers.text, answers.textColor, answers.shape, answers.shapeColor);
//             const genSq = genSVGSqr(square);
//             fs.writeFileSync('TESTING.svg', genSq);
//             break;
//         case 'Circle':
//             const circle = new Circle(answers.text, answers.textColor, answers.shape, answers.shapeColor);
//             const genCr = genSVGCir(circle);
//             fs.writeFileSync('TESTING.svg', genCr);
//             break;
//         case 'Triangle':
//             const triangle = new Triangle(answers.text, answers.textColor, answers.shape, answers.shapeColor);
//             const genTr = genSVGTri(triangle);
//             fs.writeFileSync('TESTING.svg', genTr);
//             break;
//         }
//     }
// );

// prompt(questions).then((answers) => {
//     const key = answers.shape;
//     let genLogo;
//     let shapeGen;
//     if (key === 'Square') {
//         genLogo = new Square(answers.text, answers.textColor, answers.shape, answers.shapeColor);
//         shapeGen = genSVGSqr(genLogo);
//         console.log("you chose a square")
//         // fs.writeFileSync('TESTING.svg', genSq);
//         console.log(shapeGen);
//         return;
//     } else if (key === 'Circle') {
//         genLogo = new Circle(answers.text, answers.textColor, answers.shape, answers.shapeColor);
//         shapeGen = genSVGCir(answers.text, answers.textColor, answers.shapeColor);
//         console.log("you chose a circle")
//         // fs.writeFileSync('TESTING.svg', genCi);
//         console.log(shapeGen);
//         return;
//     } else {
//         console.log("PICK A SHAPE");
//     }

// });

prompt(questions).then((answers) => {
    let key = answers.shapeName;
    let shape;
    console.log(`you have chosen ${key}.`);
    if (key === 'Square') {
        shape = new Square(answers.text, answers.textColor, answers.shapeName, answers.shapeColor);
        const test = genSVGSqr(shape.text, shape.textColor, shape.shapeColor);
        fs.writeFileSync('TESTING.svg', test);
    } else if (key === 'Circle') {
        shape = new Circle(answers.text, answers.textColor, answers.shapeName, answers.shapeColor);
        const test = genSVGCir(shape.text, shape.textColor, shape.shapeColor);
        fs.writeFileSync('TESTING.svg', test);
    } else if (key === 'Triangle') {
        shape = new Triangle(answers.text, answers.textColor, answers.shapeName, answers.shapeColor);
        const test = genSVGTri(shape.text, shape.textColor, shape.shapeColor);
        fs.writeFileSync('TESTING.svg', test);
    } else {
        console.log("big time error. how did you even choose NOT an option?");
    }
})