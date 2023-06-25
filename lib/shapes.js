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

module.exports = { Square, Circle, Triangle };