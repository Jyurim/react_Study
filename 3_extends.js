function Shape(color) {
  this.color = color;
  this.getColor = function () {
    return this.color;
  };
}

function Rectangle(color, width, height) {
  Shape.call(this, color);
  this.width = width;
  this.height = height;
  this.getArea = function () {
    return this.width * this.height;
  };
}

// const rect1 = new Rectangle("red", 10, 20);
// console.log(rect1.getColor());

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const rect1 = new Rectangle(10, 20);
console.log(rect1.getArea());
