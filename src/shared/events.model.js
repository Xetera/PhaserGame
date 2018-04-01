"use strict";
exports.__esModule = true;
var GameEvent = (function () {
    function GameEvent() {
    }
    GameEvent.authentication = 'authentication:successful';
    GameEvent.drop = 'drop';
    return GameEvent;
}());
exports.GameEvent = GameEvent;
var CometEvent = (function () {
    function CometEvent() {
    }
    CometEvent.create = 'comet:create';
    CometEvent.destroy = 'comet:destroy';
    CometEvent.hit = 'comet:hit';
    CometEvent.coordinates = 'comet:coordinates';
    return CometEvent;
}());
exports.CometEvent = CometEvent;
var ServerEvent = (function () {
    function ServerEvent() {
    }
    ServerEvent.connected = 'connection';
    ServerEvent.disconnected = 'disconnect';
    return ServerEvent;
}());
exports.ServerEvent = ServerEvent;
var PlayerEvent = (function () {
    function PlayerEvent() {
    }
    PlayerEvent.joined = 'player:joined';
    PlayerEvent.protagonist = 'player:protagonist';
    PlayerEvent.players = 'actors:collection';
    PlayerEvent.quit = 'player:left';
    PlayerEvent.pickup = 'player:pickup';
    PlayerEvent.hit = 'player:hit';
    PlayerEvent.coordinates = 'player:coordinates';
    return PlayerEvent;
}());
exports.PlayerEvent = PlayerEvent;
