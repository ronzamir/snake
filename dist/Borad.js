"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Borad = void 0;
var NEW_LINE = require("os").EOL;
var Snake_1 = require("./Snake");
var Constats_1 = require("./Constats");
var Food_1 = require("./Food");
var Borad = /** @class */ (function () {
    function Borad(sizeRow, sizeCol) {
        if (sizeRow === void 0) { sizeRow = 6; }
        if (sizeCol === void 0) { sizeCol = 80; }
        this.gameBorad = [];
        this.sizeX = sizeRow;
        this.sizeY = sizeCol;
        this.Snake = new Snake_1.Snake();
        this.Food = new Food_1.Food();
        this.createBorad();
    }
    Borad.prototype.MoveSnake = function (userInput) {
        var nextSnakePos = this.Snake.GetSnakeHeadNextPostion(userInput);
        if (this.CheckSnakeColisionsWitchFood(nextSnakePos)) {
            this.Snake.eat();
            this.InsetFood();
        }
        this.ClearSnake();
        this.Snake.Move(nextSnakePos);
        this.InsetSnake();
    };
    Borad.prototype.CheckSnakeColisionsWitchFood = function (nextSnakePos) {
        return nextSnakePos.euqel(this.Food.location);
    };
    Borad.prototype.Draw = function () {
        console.clear();
        for (var i = 0; i < this.sizeX; i++) {
            for (var j = 0; j < this.sizeY; j++) {
                process.stdout.write(this.gameBorad[i][j]);
            }
            console.log();
        }
    };
    Borad.prototype.CheckColisions = function () {
        if (this.CheckSnakeColisionsWitchLimits()) {
            console.log("user fail");
        }
    };
    Borad.prototype.CheckSnakeColisionsWitchLimits = function () {
        for (var i = 0; i < this.sizeX; i++) {
            if (i == 0 || i == this.sizeX - 1) {
                for (var j = 0; j < this.sizeY; j++) {
                    if (this.gameBorad[i][j] != Constats_1.ConstatsSimboly.Limit)
                        return true;
                }
            }
            else {
                if (this.gameBorad[i][0] != Constats_1.ConstatsSimboly.Limit || this.gameBorad[i][this.sizeY - 1] != Constats_1.ConstatsSimboly.Limit)
                    return true;
            }
        }
        return false;
    };
    Borad.prototype.createBorad = function () {
        this.initEmptyGameBorad(this.sizeX, this.sizeY);
        this.createBoradConfines(this.sizeX, this.sizeY);
        this.InsetSnake();
        this.InsetFood();
    };
    Borad.prototype.initEmptyGameBorad = function (sizeRow, sizeCol) {
        for (var i = 0; i < sizeRow; i++) {
            this.gameBorad[i] = [];
            for (var j = 0; j < sizeCol; j++) {
                this.gameBorad[i][j] = Constats_1.ConstatsSimboly.Empty;
            }
        }
    };
    Borad.prototype.createBoradConfines = function (sizeRow, sizeCol) {
        for (var i = 0; i < sizeRow; i++) {
            if (i == 0 || i == sizeRow - 1) {
                for (var j = 0; j < sizeCol; j++) {
                    this.gameBorad[i][j] = Constats_1.ConstatsSimboly.Limit;
                }
            }
            else {
                this.gameBorad[i][0] = Constats_1.ConstatsSimboly.Limit;
                this.gameBorad[i][sizeCol - 1] = Constats_1.ConstatsSimboly.Limit;
            }
        }
    };
    Borad.prototype.InsetFood = function () {
        while (this.gameBorad[this.Food.location.x][this.Food.location.y] != Constats_1.ConstatsSimboly.Empty) {
            this.Food.changeFoodLocation(0, this.sizeX - 1, 0, this.sizeY - 1);
        }
        this.gameBorad[this.Food.location.x][this.Food.location.y] = this.Food.simboly;
    };
    Borad.prototype.InsetSnake = function () {
        var snakePos = this.Snake.getSnake();
        this.InsetToBorad(snakePos, this.Snake.simboly);
    };
    Borad.prototype.ClearSnake = function () {
        var snakePos = this.Snake.getSnake();
        this.InsetToBorad(snakePos, " ");
    };
    Borad.prototype.InsetToBorad = function (pos, simboly) {
        for (var i = 0; i < pos.length; i++) {
            this.gameBorad[pos[i].x][pos[i].y] = simboly;
        }
    };
    return Borad;
}());
exports.Borad = Borad;
