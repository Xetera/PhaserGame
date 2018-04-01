"use strict";
exports.__esModule = true;
var models_1 = require("../../shared/models");
function randomPointOnCanvas() {
    return [
        Math.floor(Math.random() * models_1.gameDimensions.x),
        Math.floor(Math.random() * models_1.gameDimensions.y)
    ];
}
exports.randomPointOnCanvas = randomPointOnCanvas;
function randomInt(range) {
    return Math.floor(Math.random() * range);
}
exports.randomInt = randomInt;
function random(input) {
    if (Array.isArray(input)) {
        return input[randomInt(input.length)];
    }
    return randomInt(input);
}
exports.random = random;
