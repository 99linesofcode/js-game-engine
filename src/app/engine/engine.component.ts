import { Component, OnInit } from '@angular/core';
import { EngineService } from './engine.service';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.css']
})
export class EngineComponent implements OnInit {
  // property types
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;

  constructor(private engine: EngineService) {}

  ngOnInit() {
    this.canvas = <HTMLCanvasElement>document.getElementById('viewport');
    this.ctx = this.canvas.getContext('2d');
    this.width = window.innerWidth - 100;
    this.height = window.innerHeight - 100;

    this.canvas.style.width = this.width + 'px';
    this.canvas.style.height = this.height + 'px';

    const scale = window.devicePixelRatio;
    this.canvas.width = this.width * scale;
    this.canvas.height = this.height * scale;
    this.ctx.scale(scale, scale);

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = 'rgba(0,0,0,.8)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = '#fff';
    this.ctx.font = '18px Arial';
    this.ctx.fillText('2D', 10, 22);
  }
}
