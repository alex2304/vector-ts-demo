"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vector_1 = require("../vector");
var mocha_1 = require("@testdeck/mocha");
var _chai = require("chai");
var chai_1 = require("chai");
_chai.should();
_chai.expect;
var VectorUnitTest = /** @class */ (function () {
    function VectorUnitTest() {
    }
    // noinspection JSUnusedGlobalSymbols
    VectorUnitTest.prototype.before = function () {
        var _a, _b;
        this.vector1 = new vector_1.default();
        this.vector2 = new vector_1.default();
        (_a = this.vector1).push.apply(_a, [0, 1, 2]);
        (_b = this.vector2).push.apply(_b, [1, 2, 3, 4]);
    };
    VectorUnitTest.prototype['Vectors are filled with right length'] = function () {
        this.vector1.length().should.to.be.equal(3);
        this.vector2.length().should.to.be.equal(4);
    };
    VectorUnitTest.prototype['Dot product of vectors with different length is correct'] = function () {
        // [0, 1, 2] • [1, 2, 3, 4] = 8
        var dotProduct = this.vector1.dotProduct(this.vector2);
        chai_1.expect(dotProduct).to.be.equal(8, 'dot product of different length vectors is wrong');
    };
    VectorUnitTest.prototype['Cross product of vectors with different length is correct'] = function () {
        // [0, 1, 2] x [1, 2, 3, 4] = 30
        var dotProduct = this.vector1.crossProduct(this.vector2);
        chai_1.expect(dotProduct).to.be.equal(30, 'cross product of different length vectors is wrong');
    };
    __decorate([
        mocha_1.test
    ], VectorUnitTest.prototype, "Vectors are filled with right length", null);
    __decorate([
        mocha_1.test
    ], VectorUnitTest.prototype, "Dot product of vectors with different length is correct", null);
    __decorate([
        mocha_1.test
    ], VectorUnitTest.prototype, "Cross product of vectors with different length is correct", null);
    VectorUnitTest = __decorate([
        mocha_1.suite
    ], VectorUnitTest);
    return VectorUnitTest;
}());
//# sourceMappingURL=vector.unit.test.js.map