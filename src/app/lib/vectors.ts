export class Vector2 {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add = (v: Vector2) => {
    return new Vector2(this.x + v.x, this.y + v.y);
  };

  sub = (v: Vector2) => {
    return new Vector2(this.x - v.x, this.y - v.y);
  };

  mul = (s: number) => {
    return new Vector2(this.x * s, this.y * s);
  };

  div = (s: number) => {
    return new Vector2(this.x / s, this.y / s);
  };

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  lengthSquared() {
    return this.x * this.x + this.y * this.y;
  }

  normalized() {
    return new Vector2(this.x / this.length(), this.y / this.length());
  }
}
