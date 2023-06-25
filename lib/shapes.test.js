// imports for tests
const { Square, Circle, Triangle } = require("./shapes");

// test suite for all shape generation
describe('shapes', () => {
    // test to match output of object with result for Square
    describe('Square', () => {
        it('will match the output of the object created by the corresponding class constructor', () => {
            const result = "ZZZ, blue, Square, red";
            const square = new Square('ZZZ', 'blue', 'Square', 'red');
            expect(square.render()).toEqual(result);
        })
    })
        // test to match output of object with result for Circle
    describe('Circle', () => {
        it('will match the output of the object created by the corresponding class constructor', () => {
            const result = "GGG, white, Circle, magenta";
            const circle = new Circle('GGG', 'white', 'Circle', 'magenta');
            expect(circle.render()).toEqual(result);
        })
    })
        // test to match output of object with result for Triangle
    describe('Triangle', () => {
        it('will match the output of the object created by the corresponding class constructor', () => {
            const result = "BBB, orange, Triangle, green";
            const triangle = new Triangle('BBB', 'orange', 'Triangle', 'green');
            expect(triangle.render()).toEqual(result);
        })
    })
})