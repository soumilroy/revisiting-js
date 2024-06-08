export class Circle {
  static allowedColors = new Set(["red", "green", "blue"]);

  constructor(radius, color) {
    this._radius = radius;

    if (Circle.allowedColors.has(color)) {
      this._color = color;
    } else {
      throw new Error("Invalid color. Please try again.");
    }
  }

  get radius() {
    return this._radius;
  }

  set radius(val) {
    if (val <= 0) {
      throw new Error("Invalid radius. Please try again.");
    }

    this._radius = val;
  }
}
