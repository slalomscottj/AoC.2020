import { expect } from 'chai';
import { BoardingPass, deserialize } from './boardingPass';

describe('BoardingPass', () => {
    it('Serializes', () => {
        let a = { row: 70, col: 7, seatId: 567 };
        let b = { row: 14, col: 7, seatId: 119 };
        let c = { row: 102, col: 4, seatId: 820 };

        expect(deserialize('BFFFBBFRRR')).to.deep.equal(a);
        expect(deserialize('FFFBBBFRRR')).to.deep.equal(b);
        expect(deserialize('BBFFBBFRLL')).to.deep.equal(c);
    });
});