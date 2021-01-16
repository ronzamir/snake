"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Postion = void 0;
var Postion = /** @class */ (function () {
    function Postion(_x, _y) {
        this.x = _x;
        this.y = _y;
    }
    Postion.prototype.Add = function (other) {
        this.x += other.x;
        this.y += other.y;
    };
    Postion.prototype.euqel = function (other) {
        return this.x == other.x && this.y == other.y;
    };
    return Postion;
}());
exports.Postion = Postion;
