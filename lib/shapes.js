
const Shape = class Shape {
    constructor(text, textColor, shapeName, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeName = shapeName;
        this.shapeColor = shapeColor;
    }
    render() {
        return `${this.text}, ${this.textColor}, ${this.shapeName}, ${this.shapeColor}`;
    }
}


class Square extends Shape {
    constructor(text, textColor, shapeName, shapeColor) {
        super(text, textColor, shapeName, shapeColor);
    }
}
class Circle extends Shape {
    constructor(text, textColor, shapeName, shapeColor) {
        super(text, textColor, shapeName, shapeColor);
    }
}
class Triangle extends Shape {
    constructor(text, textColor, shapeName, shapeColor) {
        super(text, textColor, shapeName, shapeColor);
    }
}



// old
// const test = new Shape('TAW', 'blue', 'Square', 'Orange');
// const test2 = new Square('BMW', 'Orange', 'Square', 'Green');
// const test3 = new Circle('JMW', 'White', 'Square', 'Black');
// const test4 = new Triangle('BDW', 'Pink', 'Square', 'Green');

// console.log(test);
// console.log(test2);
// console.log(test3);
// console.log(test4);
// test.render();
// test2.render();
// test3.render();
// test4.render();


// function Shape(base, yaxis) {
//     this.base = base;
//     this.yaxis = yaxis;
// }

// function Square(base, yaxis, test) {
//     Shape.call(this, base, yaxis);
//     this.test = test;
// }

// function Circle(base, yaxis, test) {
//     Shape.call(this, base, yaxis);
//     this.test = test;
// }

// function Triangle(base, yaxis, test) {
//     Shape.call(this, base, yaxis);
//     this.test = test;
// }

module.exports = { Shape, Square, Circle, Triangle };