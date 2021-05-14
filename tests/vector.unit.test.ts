import Vector from '../vector';
import {suite, test} from '@testdeck/mocha';
import * as _chai from 'chai';
import {expect} from 'chai';

_chai.should();
_chai.expect;

@suite
class VectorUnitTest {
    private vector1: Vector<number>;
    private vector2: Vector<number>;


    // noinspection JSUnusedGlobalSymbols
    before() {
        this.vector1 = new Vector<number>();
        this.vector2 = new Vector<number>();

        this.vector1.push(...[0, 1, 2]);
        this.vector2.push(...[1, 2, 3, 4]);
    }

    @test 'Vectors are filled with right length'() {
        this.vector1.length().should.to.be.equal(3);
        this.vector2.length().should.to.be.equal(4);
    }

    @test 'Dot product of vectors with different length is correct'() {
        // [0, 1, 2] • [1, 2, 3, 4] = 8
        const dotProduct = this.vector1.dotProduct(this.vector2);
        expect(dotProduct).to.be.equal(8, 'dot product of different length vectors is wrong')
    }

    @test 'Cross product of vectors with different length is correct'() {
        // [0, 1, 2] x [1, 2, 3, 4] = 30
        const dotProduct = this.vector1.crossProduct(this.vector2);
        expect(dotProduct).to.be.equal(30, 'cross product of different length vectors is wrong')
    }

}