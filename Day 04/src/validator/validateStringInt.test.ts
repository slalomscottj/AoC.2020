import { expect } from 'chai';
import { validateStringInt } from './passport';

describe('validateStringInt', () => {
    it('returns true for valid input', () => {
        expect(validateStringInt("2",1,3)).to.be.true;
    });

    it('returns false for low values', () => {
        expect(validateStringInt("0",1,3)).to.be.false;
    });

    it('returns false for high values', () => {
        expect(validateStringInt("4",1,3)).to.be.false;
    });

    it('returns false for empty string', () => {
        expect(validateStringInt("",1,3)).to.be.false;
    });

    it('returns false for undefined', () => {
        expect(validateStringInt(undefined,1,3)).to.be.false;;
    });
});
