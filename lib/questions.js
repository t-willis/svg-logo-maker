module.exports = [
    {
        message: 'PLACEHOLDER text?',
        name: 'text',
        default: 'TAW',
    },
    {
        message: 'Text color? (please start with \'#\' if using a hex color code)',
        name: 'textColor',
        default: 'white',
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
        default: 'blue',
    },
];