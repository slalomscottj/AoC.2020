import { expect } from 'chai';
import { validateHeight } from './passport';

describe('validateHeight', () => {
    it('returns true for valid metric input', () => {
        expect(validateHeight("160cm",)).to.be.true;
    });

    it('returns true for valid imperial input', () => {
        expect(validateHeight("72in",)).to.be.true;
    });

    it('returns false for unknown unit of measure', () => {
        expect(validateHeight("160em",)).to.be.false;
    });

    it('returns false for no unit of measure', () => {
        expect(validateHeight("160",)).to.be.false;
    });

    it('returns false for low metric values', () => {
        expect(validateHeight("149")).to.be.false;
    });

    it('returns false for high metric values', () => {
        expect(validateHeight("194")).to.be.false;
    });

    it('returns false for low imperial values', () => {
        expect(validateHeight("58")).to.be.false;
    });

    it('returns false for high imperial values', () => {
        expect(validateHeight("76")).to.be.false;
    });

    it('returns false for empty string', () => {
        expect(validateHeight("")).to.be.false;
    });

    it('returns false for undefined', () => {
        expect(validateHeight(undefined)).to.be.false;;
    });
});
