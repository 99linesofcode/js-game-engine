import { Component, OnInit } from '@angular/core';
import { EngineService } from './engine.service';

import { Vector2 } from '../lib/vectors';

import { Pacman } from './entities/pacman';
import { Canvas } from './entities/canvas';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.css']
})
export class EngineComponent implements OnInit {
  private canvas: Canvas;
  private pacman: Pacman;

  private delta: number;
  private previousTime: number = 0;

  constructor(private engine: EngineService) {}

  ngOnInit() {
    const element = <HTMLCanvasElement>document.getElementById('viewport');
    this.canvas = new Canvas(element);

    this.pacman = new Pacman(this.canvas.context);
    this.pacman.position = new Vector2(100, 100);
    this.pacman.velocity = new Vector2(10, 10);
    this.pacman.gravity = new Vector2(0, 1);

    window.requestAnimationFrame(time => {
      this.loop(time);
    });
  }

  loop = (time: number) => {
    this.delta = time - this.previousTime;
    this.previousTime = time;

    if (this.delta > 0.5) this.delta = 0.5;

    this.update(this.delta);
    this.draw();

    requestAnimationFrame(this.loop);
  };

  update = (delta: number) => {
    this.pacman.position = this.pacman.position.add(
      this.pacman.velocity.mul(delta)
    );

    this.pacman.velocity = this.pacman.velocity.add(
      this.pacman.gravity.mul(delta)
    );

    this.keepPacmanWithinCanvas();
  };

  draw = () => {
    this.canvas.draw();
    this.pacman.draw();
  };

  //*
  //*
  //*

  private DotProduct = (a: Vector2, b: Vector2) => {
    return a.x * b.x + a.y * b.y;
  };

  private keepPacmanWithinCanvas = () => {
    // too high
    if (this.pacman.position.y < 0) {
      this.pacman.velocity.y *= -1;
    }

    // hit the ground
    if (this.pacman.position.y >= this.canvas.height - 10) {
      this.pacman.position.y = this.canvas.height - 10;
      this.pacman.velocity.y /= 2;
      this.pacman.velocity.y *= -1;
    }

    if (this.xOutOfBounds()) {
      this.pacman.velocity.x *= -1;
    }
  };

  private xOutOfBounds = () => {
    return (
      this.pacman.position.x > this.canvas.width - 10 ||
      this.pacman.position.x < 0
    );
  };
}
