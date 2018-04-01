import { gameDimensions } from "../../shared/models";
import Player from "../player/player";
import { Client, EntityMap, Room, Server } from "colyseus";

export default class Game extends Room {
	players: EntityMap<Player>;
	server: Server;
	constructor(){
		super();
		console.log('room created');
	}

	onInit(options: any) {
		console.log("BasicRoom created!", options);
	}

	onJoin(client: Client) {
		this.broadcast(`${ client.sessionId } joined.`);
	}

	onLeave(client: Client) {
		this.broadcast(`${ client.sessionId } left.`);
	}

	onMessage(client: Client, data: any) {
		console.log("BasicRoom received message from", client.sessionId, ":", data);
		this.broadcast(`(${ client.sessionId }) ${ data.message }`);
	}

	onDispose() {
		console.log("Dispose BasicRoom");
	}
}
