import Item from "./item";
import Sprite = Phaser.Sprite;

export enum Shape {
	Square,
	Circle,
}

export interface Entity {
	id: string;
	sprite: Sprite;
}

export interface Droppable extends Entity {
	shape: Shape;
	sprite: Sprite;
	duration: number;
	id: string;
}

export enum ItemEffect {
	SpeedUp,
	SpeedDown,
	SizeUp,
	SizeDown,
	None
}
