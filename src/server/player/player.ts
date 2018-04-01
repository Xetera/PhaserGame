import Point = Phaser.Point;
import { randomPointOnCanvas } from "../util/math";
;
import { Entity } from "../items/interfaces";

export default class Player implements Entity {
	public name: string;
	public id: string;
	public size: number;
	public maxSize: number;
	public position: Point;
	public speed: number;
	public maxSpeed: number;
	public visible: boolean;
	constructor(){
		// there will probably be a spawning area for something
		const randomPosition = randomPointOnCanvas();
		this.position = new Point(randomPosition[0], randomPosition[1]);
		this.speed = 10; // we might determine this later by some class value or something
		this.maxSpeed = 50;
		this.initPlayer();
	}

	private initPlayer(): void {
		this.sprite = this.game.add.sprite(this.position.x, this.position.y);
	}


	public setSpeed(speed: number){
		this.speed = Phaser.Math.clamp(speed, 0, this.maxSpeed);
	}
	public increaseSpeed(amount: number){
		this.speed = Phaser.Math.clamp(this.speed + amount, 0, this.maxSpeed);
	}
	public decreaseSpeed(amount: number){
		this.speed = Phaser.Math.clamp(this.speed - amount, 0, this.maxSpeed);
	}

	public grow(amount: number){
		this.size = Phaser.Math.clamp(this.size + amount, 0, this.maxSize);
	}

	public shrink(amount: number){
		this.size = Phaser.Math.clamp(this.size - amount, 0, this.maxSize);
	}

	public update(){

	}

	private move(){

	}
}
