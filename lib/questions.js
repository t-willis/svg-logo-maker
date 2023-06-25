module.exports = [
    {
        message: 'What text would you like? (MAX 3 CHARACTERS)',
        name: 'text',
    },
    {
        type: 'list',
        message: 'Would you like to use a hex color code or choose by name?',
        name: 'textColorFormat',
        choices: [ 'Name', 'Hex color code'],
    },
    {
        type: 'input',
        message: 'What color would you like the text to be?',
        name: 'textColor',
        when: (answers) => answers.textColorFormat.includes('Name'),
    },
    {
        type: 'input',
        message: 'What hex color code would like the text to be (please include the #)?',
        name: 'textColor',
        when: (answers) => answers.textColorFormat.includes('Hex color code'),
        validate: function (answer) {
            const isHex = /[0-9A-Fa-f#]{7}/g;
            if (isHex.test(answer) === false) {
                return console.log(`
                please enter a valid hex code! (be sure to include the #)`);
            }
            return true;
        }
    },
    {
        type: 'list',
        message: 'Which shape would you like?',
        name: 'shapeName',
        choices: [ 'Square', 'Triangle', 'Circle' ],
    },
    {
        type: 'list',
        message: 'Would you like to use a hex color code or choose by name?',
        name: 'shapeColorFormat',
        choices: [ 'Name', 'Hex color code'],
    },
    {
        type: 'input',
        message: 'What color would you like the shape to be?',
        name: 'shapeColor',
        when: (answers) => answers.shapeColorFormat.includes('Name'),
    },
    {
        type: 'input',
        message: 'What hex color code would like the shape to be?',
        name: 'shapeColor',
        when: (answers) => answers.shapeColorFormat.includes('Hex color code'),
        validate: function (answer) {
            const isHex = /[0-9A-Fa-f#]{7}/g;
            if (isHex.test(answer) === false) {
                return console.log(`
                please enter a valid hex code! (be sure to include the #)`);
            }
            return true;
        }
    },
];