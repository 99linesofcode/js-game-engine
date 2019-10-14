export class Canvas {
  context: CanvasRenderingContext2D;
  height: number;
  width: number;

  constructor(private canvas: HTMLCanvasElement) {
    this.setup();
  }

  setup = () => {
    this.context = this.canvas.getContext('2d');
    this.width = window.innerWidth - 100;
    this.height = window.innerHeight - 100;

    this.canvas.style.width = this.width + 'px';
    this.canvas.style.height = this.height + 'px';

    const scale = window.devicePixelRatio;
    this.canvas.width = this.width * scale;
    this.canvas.height = this.height * scale;
    this.context.scale(scale, scale);

    this.draw();
  };

  draw = () => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillStyle = 'rgba(0,0,0,.8)';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  };
}
