"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
var Postion_1 = require("./Postion");
var Constats_1 = require("./Constats");
var Food = /** @class */ (function () {
    function Food() {
        this.location = new Postion_1.Postion(0, 0);
        this.simboly = Constats_1.ConstatsSimboly.Food;
    }
    Food.prototype.changeFoodLocation = function (minX, maxX, minY, maxY) {
        this.location.x = this.getRandomArbitrary(minX, maxX);
        this.location.y = this.getRandomArbitrary(minY, maxY);
    };
    Food.prototype.getRandomArbitrary = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    return Food;
}());
exports.Food = Food;
