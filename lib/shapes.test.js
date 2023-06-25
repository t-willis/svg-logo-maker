const { Shape, Square, Circle, Triangle } = require("./shapes");

describe('shapes', () => {
    describe('Square', () => {
        it('will match the output of the object created by the corresponding class constructor', () => {
            const result = "ZZZ, blue, Square, red";
            const square = new Square('ZZZ', 'blue', 'Square', 'red');
            expect(square.render()).toEqual(result);
        })
    })
    describe('Circle', () => {
        it('will match the output of the object created by the corresponding class constructor', () => {
            const result = "GGG, white, Circle, magenta";
            const circle = new Circle('GGG', 'white', 'Circle', 'magenta');
            expect(circle.render()).toEqual(result);
        })
    })
    describe('Triangle', () => {
        it('will match the output of the object created by the corresponding class constructor', () => {
            const result = "BBB, orange, Triangle, green";
            const triangle = new Triangle('BBB', 'orange', 'Triangle', 'green');
            expect(triangle.render()).toEqual(result);
        })
    })
})