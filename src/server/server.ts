import * as path from 'path';
import * as express from 'express';
import { createServer } from 'http';
import { Server } from 'colyseus';
import Game from "./game/game";

const serveIndex = require('serve-index');
const port = Number(process.env.PORT || 3000);
const app = express();

// Attach WebSocket Server on HTTP Server.
const gameServer = new Server({
	server: createServer(app)
});

// Register ChatRoom as "chat"
gameServer.register("game", Game);

app.use(express.static(path.join(__dirname, "../../public/dist")));

app.use('/', () => {
	console.log('/ got');
	serveIndex(path.join(__dirname, "../../public/dist"), {'icons': true})
});

gameServer.listen(port);

console.log(`Listening on http://localhost:${ port }`);
