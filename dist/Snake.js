"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snake = void 0;
var Postion_1 = require("./Postion");
var Constats_1 = require("./Constats");
var Snake = /** @class */ (function () {
    function Snake() {
        this.body = new Array();
        this.body.push(new Postion_1.Postion(1, 1));
        this.body.push(new Postion_1.Postion(1, 2));
        this.body.push(new Postion_1.Postion(1, 3));
        this.simboly = Constats_1.ConstatsSimboly.Snake;
        this.countEat = 0;
    }
    Snake.prototype.eat = function () {
        this.countEat++;
    };
    Snake.prototype.GetDircationOfMove = function (dir) {
        switch (dir) {
            case Constats_1.Constats.RIGHT:
                return Constats_1.Constats.MoveRight;
            case Constats_1.Constats.UP:
                return Constats_1.Constats.MoveUp;
            case Constats_1.Constats.LEFT:
                return Constats_1.Constats.MoveLeft;
            case Constats_1.Constats.DOWN:
                return Constats_1.Constats.MoveDown;
            default:
                return Constats_1.Constats.NOT_MOVE;
        }
    };
    Snake.prototype.Move = function (nextMove) {
        if (nextMove.euqel(Constats_1.Constats.NOT_MOVE))
            return;
        if (this.countEat > 0) {
            this.countEat--;
        }
        else {
            this.body.splice(0, 1);
        }
        this.body.push(nextMove);
    };
    Snake.prototype.GetSnakeHeadNextPostion = function (nextMove) {
        var pos = this.GetDircationOfMove(nextMove);
        var newPostion = new Postion_1.Postion(pos.x, pos.y);
        newPostion.Add(this.body[this.body.length - 1]);
        return newPostion;
    };
    Snake.prototype.getSnake = function () {
        return this.body;
    };
    Snake.prototype.getSnakeHead = function () {
        return this.body[this.body.length - 1];
    };
    return Snake;
}());
exports.Snake = Snake;
