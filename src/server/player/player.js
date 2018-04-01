"use strict";
exports.__esModule = true;
var Point = Phaser.Point;
var math_1 = require("../util/math");
var Player = (function () {
    function Player(game) {
        this.game = game;
        // there will probably be a spawning area for something
        var randomPosition = math_1.randomPointOnCanvas();
        this.position = new Point(randomPosition[0], randomPosition[1]);
        this.speed = 10; // we might determine this later by some class value or something
        this.maxSpeed = 50;
        this.initPlayer();
    }
    Player.prototype.initPlayer = function () {
        this.sprite = this.game.add.sprite(this.position.x, this.position.y);
    };
    Player.prototype.setSpeed = function (speed) {
        this.speed = Phaser.Math.clamp(speed, 0, this.maxSpeed);
    };
    Player.prototype.increaseSpeed = function (amount) {
        this.speed = Phaser.Math.clamp(this.speed + amount, 0, this.maxSpeed);
    };
    Player.prototype.decreaseSpeed = function (amount) {
        this.speed = Phaser.Math.clamp(this.speed - amount, 0, this.maxSpeed);
    };
    Player.prototype.grow = function (amount) {
        this.size = Phaser.Math.clamp(this.size + amount, 0, this.maxSize);
    };
    Player.prototype.shrink = function (amount) {
        this.size = Phaser.Math.clamp(this.size - amount, 0, this.maxSize);
    };
    Player.prototype.update = function () {
    };
    Player.prototype.move = function () {
    };
    return Player;
}());
exports["default"] = Player;
