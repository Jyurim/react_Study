class Shape {
  static APP_NAME = "Shape App";
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
  static getAppName() {
    return Shape.APP_NAME;
  }
}

const shape1 = new Shape("red");
console.log(shape1.getAppName); // undefined
console.log(Shape.APP_NAME); // Shape App
console.log(shpe1.APP_NAME); // undefined
console.log(Shape.APP_NAME); // Shape App
