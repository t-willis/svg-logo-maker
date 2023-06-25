// Shape class constructor
const Shape = class Shape {
    constructor(text, textColor, shapeName, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeName = shapeName;
        this.shapeColor = shapeColor;
    }
    // render() method to test that user input was properly written
    render() {
        return `${this.text}, ${this.textColor}, ${this.shapeName}, ${this.shapeColor}`;
    }
}

// class constructor for Square using Shape as super
class Square extends Shape {
    constructor(text, textColor, shapeName, shapeColor) {
        super(text, textColor, shapeName, shapeColor);
    }
}
// class constructor for Circle using Shape as super
class Circle extends Shape {
    constructor(text, textColor, shapeName, shapeColor) {
        super(text, textColor, shapeName, shapeColor);
    }
}
// class constructor for Triangle using Shape as super
class Triangle extends Shape {
    constructor(text, textColor, shapeName, shapeColor) {
        super(text, textColor, shapeName, shapeColor);
    }
}

module.exports = { Square, Circle, Triangle };