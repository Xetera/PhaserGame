"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var colyseus_1 = require("colyseus");
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        return _super.call(this) || this;
    }
    Game.prototype.onInit = function (options) {
        console.log("BasicRoom created!", options);
    };
    Game.prototype.onJoin = function (client) {
        this.broadcast(client.sessionId + " joined.");
    };
    Game.prototype.onLeave = function (client) {
        this.broadcast(client.sessionId + " left.");
    };
    Game.prototype.onMessage = function (client, data) {
        console.log("BasicRoom received message from", client.sessionId, ":", data);
        this.broadcast("(" + client.sessionId + ") " + data.message);
    };
    Game.prototype.onDispose = function () {
        console.log("Dispose BasicRoom");
    };
    return Game;
}(colyseus_1.Room));
exports["default"] = Game;
