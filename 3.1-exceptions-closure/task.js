function parseCount(forParse) {
  const number = Number.parseInt(forParse);
  if (isNaN(number)) {
    const parseError = new Error("Невалидное значение!");
    throw parseError;
  }
  return number;
}

function validateCount(forParse) {
  try {
    const number = parseCount(forParse);
    return number;
  } catch (e) {
    return e.message;
  }
}

class Triangle {
  constructor(a, b, c) {
    if ((a + b < c) || (b + c < a) || (c + a < b)) {
      const inputError = new Error("Треугольник с такими сторонами не существует");
      throw inputError;
    } else {
      this.a = a;
      this.b = b;
      this.c = c;
    }
    this.P = 0;
    this.S = 0;
  }
  getPerimeter() {
    let a = this.a;
    let b = this.b;
    let c = this.c;
    this.P = (a + b + c).toFixed(3);
    return this.P;
  }
  getArea() {
    let a = this.a;
    let b = this.b;
    let c = this.c;
    const p = (this.getPerimeter()) / 2;
    this.S = Math.sqrt((p) * (p - a) * (p - b) * (p - c)).toFixed(3);
    return this.S;
  }
}
class TriangleWithMistake {
  constructor() {
    this.P = "Ошибка! Треугольник не существует";
    this.S = "Ошибка! Треугольник не существует";
  }

  getPerimeter() {
    return this.P;
  }
  getArea() {
    return this.S;
  }
}

function getTriangle(a, b, c) {
  try {
    const triangle = new Triangle(a, b, c);
    triangle.getArea();
    triangle.getPerimeter();
    return triangle;
  } catch (e) {
    const triangle = new TriangleWithMistake();
    triangle.getArea();
    triangle.getPerimeter();
    return triangle;
  }
}