const fs = require("fs");
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const questions = require("./lib/questions");

prompt(questions).then((answers) => {
    console.log(answers);
});