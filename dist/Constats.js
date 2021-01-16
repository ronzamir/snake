"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstatsSimboly = exports.Constats = void 0;
var Postion_1 = require("./Postion");
var Constats = /** @class */ (function () {
    function Constats() {
    }
    Constats.USER_EVENT = "USER_EVENT";
    Constats.RIGHT = "right";
    Constats.LEFT = "left";
    Constats.DOWN = "down";
    Constats.UP = "up";
    Constats.BOOK_SHELF_FULL = "Full";
    Constats.allowKeyborad = [Constats.DOWN, Constats.LEFT, Constats.RIGHT, Constats.UP];
    Constats.MoveUp = new Postion_1.Postion(-1, 0);
    Constats.MoveDown = new Postion_1.Postion(1, 0);
    Constats.MoveLeft = new Postion_1.Postion(0, -1);
    Constats.MoveRight = new Postion_1.Postion(0, 1);
    Constats.NOT_MOVE = new Postion_1.Postion(0, 0);
    return Constats;
}());
exports.Constats = Constats;
var ConstatsSimboly = /** @class */ (function () {
    function ConstatsSimboly() {
    }
    ConstatsSimboly.Food = "@";
    ConstatsSimboly.Snake = "#";
    ConstatsSimboly.Empty = " ";
    ConstatsSimboly.Limit = "*";
    return ConstatsSimboly;
}());
exports.ConstatsSimboly = ConstatsSimboly;
