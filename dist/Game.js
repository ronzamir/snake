"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Borad_1 = require("./Borad");
var UserInput_1 = require("./UserInput");
var events_1 = require("events");
var Constats_1 = require("./Constats");
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        this.userInput = new UserInput_1.UserInput();
        this.BoradGame = new Borad_1.Borad();
        this.eventEmitter = new events_1.EventEmitter();
        this.eventEmitter.on(Constats_1.Constats.USER_EVENT, function (input) { return _this.handelInput(input); });
    }
    Game.prototype.startGame = function () {
        this.userInput.listinUserInput(this.eventEmitter);
        this.BoradGame.Draw();
    };
    Game.prototype.handelInput = function (input) {
        this.BoradGame.MoveSnake(input);
        this.BoradGame.Draw();
        this.BoradGame.CheckColisions();
    };
    return Game;
}());
exports.Game = Game;
