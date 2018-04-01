"use strict";
exports.__esModule = true;
var path = require("path");
var express = require("express");
var serveIndex = require('serve-index');
var http_1 = require("http");
var colyseus_1 = require("colyseus");
var game_1 = require("./game/game");
var port = Number(process.env.PORT || 3000);
var app = express();
// Attach WebSocket Server on HTTP Server.
var gameServer = new colyseus_1.Server({
    server: http_1.createServer(app)
});
// Register ChatRoom as "chat"
gameServer.register("game", game_1["default"]);
app.use(express.static(path.join(__dirname, "../../public/dist")));
app.use('/', function () {
    console.log('/ got');
    serveIndex(path.join(__dirname, "../../public/dist"), { 'icons': true });
});
gameServer.listen(port);
console.log("Listening on http://localhost:" + port);
