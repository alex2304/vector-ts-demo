import Vector from './vector';

const v1 = new Vector<number>();
const v2 = new Vector<number>();

v1.push(...[0, 1, 2]);
v2.push(...[1, 2, 3, 4]);

// [0, 1, 2] • [1, 2, 3, 4] = 8
console.log(v1.dotProduct(v2));

// [0, 1, 2] x [1, 2, 3, 4] = 30
console.log(v1.crossProduct(v2));
