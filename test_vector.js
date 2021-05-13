"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vector_1 = require("./vector");
var v1 = new vector_1.default();
var v2 = new vector_1.default();
v1.push.apply(v1, [0, 1, 2]);
v2.push.apply(v2, [1, 2, 3, 4]);
// [0, 1, 2] • [1, 2, 3, 4] = 8
console.log(v1.dotProduct(v2));
// [0, 1, 2] x [1, 2, 3, 4] = 30
console.log(v1.crossProduct(v2));
//# sourceMappingURL=test_vector.js.map