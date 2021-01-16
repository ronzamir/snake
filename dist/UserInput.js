"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInput = void 0;
var Constats_1 = require("./Constats");
var UserInput = /** @class */ (function () {
    function UserInput() {
        this.userInput = "";
    }
    UserInput.prototype.listinUserInput = function (eventEmitter) {
        var _this = this;
        var readline = require("readline");
        readline.emitKeypressEvents(process.stdin);
        process.stdin.setRawMode(true);
        process.stdin.on("keypress", function (str, key) {
            if (key && key.ctrl && key.name == 'c') {
                process.stdin.pause();
                return;
            }
            eventEmitter.emit(Constats_1.Constats.USER_EVENT, key.name);
            _this.userInput = key.name;
        });
    };
    return UserInput;
}());
exports.UserInput = UserInput;
