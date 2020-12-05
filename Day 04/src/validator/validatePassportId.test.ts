import { expect } from 'chai';
import { validatePassportId } from './passport';

describe('validatePassportId', () => {
        
    it('returns true for valid input', () => {
        expect(validatePassportId("000000000")).to.be.true;
    });

    it('returns false for too short', () => {
        expect(validatePassportId("00000000")).to.be.false;
    });

    it('returns false for too long', () => {
        expect(validatePassportId("0000000000")).to.be.false;
    });

    it('returns false for empty string', () => {
        expect(validatePassportId("")).to.be.false;
    });

    it('returns false for undefined', () => {
        expect(validatePassportId(undefined)).to.be.false;;
    });
});