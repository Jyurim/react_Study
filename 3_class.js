class Car {
  constructor(speed) {
    // this.da = speed;
    this.speed = speed;
  }
  // set da(value){}
  set speed(value) {
    // this.speed = value; // 무한루프
    this._speed = value < 0 ? 0 : value;
  }
  getSpeed() {
    // return this.speed;
    return this._speed;
  }
}

const car1 = new Car(100);
