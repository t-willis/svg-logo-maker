function Shape(base, yaxis) {
    this.base = base;
    this.yaxis = yaxis;
}

function Square(base, yaxis, test) {
    Shape.call(this, base, yaxis);
    this.test = test;
}

function Circle(base, yaxis, test) {
    Shape.call(this, base, yaxis);
    this.test = test;
}

function Triangle(base, yaxis, test) {
    Shape.call(this, base, yaxis);
    this.test = test;
}



const test = new Shape('test', 'okay');
const test2 = new Square('square', 'here we go', 'yay');
const test3 = new Circle('circle', 'here we go again?', 'yay again');
const test4 = new Triangle('triangle', 'here we go again again?', 'yay again again');
console.log(test);
console.log(test2);
console.log(test3);
console.log(test4);