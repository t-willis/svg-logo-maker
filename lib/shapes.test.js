// imports for tests
const { Square, Circle, Triangle } = require("./shapes");
const { genSVGSqr, genSVGCir, genSVGTri } = require("./genSVG");

// test suite for all shape generation
describe('shapes', () => {
    // test to match output of object with result for Square
    describe('Square', () => {
        it('will match the output of the object created by the corresponding class constructor', () => {
            const result = "ZZZ, blue, red";
            const square = new Square('ZZZ', 'blue', 'red');
            expect(square.render()).toEqual(result);
        })
    })
        // test to match output of object with result for Circle
    describe('Circle', () => {
        it('will match the output of the object created by the corresponding class constructor', () => {
            const result = "GGG, white, magenta";
            const circle = new Circle('GGG', 'white', 'magenta');
            expect(circle.render()).toEqual(result);
        })
    })
        // test to match output of object with result for Triangle
    describe('Triangle', () => {
        it('will match the output of the object created by the corresponding class constructor', () => {
            const result = "BBB, orange, green";
            const triangle = new Triangle('BBB', 'orange', 'green');
            expect(triangle.render()).toEqual(result);
        })
    })
    describe('Square', () => {
        it('will match the output of the genSVGSqr function (the actual code used for the .svg file)', () => {
            const result = `
<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
<rect x="5" y="5" width="250" height="250" fill="red" stroke="black" stroke-width="5"/>
<text x="130" y="160" text-anchor="middle" fill="blue" font-size="100">ZZZ</text>
</svg>`;
            expect(genSVGSqr('ZZZ', 'blue', 'red')).toEqual(result);
        })
    })
        // test to match output of object with result for Circle
    describe('Circle', () => {
        it('will match the output of the genSVGCir function (the actual code used for the .svg file)', () => {
            const result = `
<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
<circle cx="130" cy="125" r="100" fill="magenta" stroke="black" stroke-width="5"/>
<text x="130" y="160" text-anchor="middle" fill="white" font-size="100">GGG</text>
</svg>`;
            expect(genSVGCir('GGG', 'white', 'magenta')).toEqual(result);
        })
    })
        // test to match output of object with result for Triangle
    describe('Triangle', () => {
        it('will match the output of the genSVGTri function (the actual code used for the .svg file)', () => {
            const result = `
<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
<polygon points="130,25 5,200 255,200" fill="#00FF00" stroke="black" stroke-width="5"/>
<text x="130" y="165" text-anchor="middle" fill="#FFA500" font-size="75">BBB</text>
</svg>`;
            expect(genSVGTri('BBB', '#FFA500', '#00FF00')).toEqual(result);
        })
})
})