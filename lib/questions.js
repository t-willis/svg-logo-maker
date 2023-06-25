module.exports = [
    {
        message: 'What text would you like? (MAX 3 CHARACTERS)',
        name: 'text',
    },
    {
        message: 'Text color? (please start with \'#\' if using a hex color code)',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'Which shape would you like?',
        name: 'shapeName',
        choices: [ 'Square', 'Triangle', 'Circle' ],
    },
    {
        message: 'Shape color? (please start with \'#\' if using a hex color code)',
        name: 'shapeColor',
    },
];