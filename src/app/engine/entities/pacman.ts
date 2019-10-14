import { Vector2 } from '../../lib/vectors';

export class Pacman {
  public position: Vector2;
  public velocity: Vector2;
  public gravity: Vector2;

  private color: string = 'yellow';
  private radius: number = 10;

  constructor(private context: CanvasRenderingContext2D) {}

  draw = () => {
    this.context.beginPath();
    this.context.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      Math.PI * 2,
      false
    );
    this.context.closePath();
    this.context.fillStyle = this.color;
    this.context.fill();
  };
}
