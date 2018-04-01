import * as Colyseus from 'colyseus.js'
import Phaser from 'phaser'
import { gameDimensions } from "../../shared/models";

let WEBGL_RENDERER = true;
let CANVAS_RENDERER = false;

export default class Game {
	client: Colyseus.Client;
	game: Phaser.Game;

	constructor() {
		console.log('starting game');
		this.client = new Colyseus.Client('ws://localhost:3000');
		this.startGame();
		this.joinRoom();
	}

	private startGame(){
		this.game = new Phaser.Game(gameDimensions.x, gameDimensions.y, Phaser.AUTO, 'boi');
		this.client.onOpen.addOnce(() => {
			console.log('Colyseus started');
		});
	}

	private joinRoom(){
		let room = this.client.join("game");
		room.onJoin.add(() => {
			console.log(this.client.id, "joined", room.name);
		});
	}

}
