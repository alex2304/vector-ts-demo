"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector = /** @class */ (function () {
    function Vector() {
        this.storage = [];
    }
    Vector.prototype.push = function () {
        var _a;
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        (_a = this.storage).push.apply(_a, e);
    };
    Vector.prototype.get = function (i) {
        return this.storage[i];
    };
    Vector.prototype.length = function () {
        return this.storage.length;
    };
    Vector.prototype.dotProduct = function (v) {
        var result = 0;
        this.storage.forEach(function (value, index, _) {
            var anotherElement = v.get(index);
            if (anotherElement && value) {
                result += value * v.get(index);
            }
        });
        return result;
    };
    Vector.prototype.crossProduct = function (v) {
        var result = 0;
        this.storage.forEach(function (value) {
            for (var i = 0; i < v.length(); i++) {
                result += v.get(i) * value;
            }
        });
        return result;
    };
    return Vector;
}());
exports.default = Vector;
//# sourceMappingURL=vector.js.map