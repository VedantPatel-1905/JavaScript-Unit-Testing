const functions = require('../calculator/calculator_function');
const assert = require('assert');

describe('Testing addition function', () => {
    it('Test for addition of 4 and 5', () => {
        const result = functions.add(4,5);
        assert.equal(result,9);
    });
    it('Test for addition of -12 and 5', () => {
        const result = functions.add(-12,5);
        assert.equal(result,-7);
    });
    it('Test for addition of -14 and -3', () => {
        const result = functions.add(-14,-3);
        assert.equal(result,-17);
    });
});
describe('Testing subtraction function', () => {
    it('Test for addition of 6 and 3', () => {
        const result = functions.subtract(6,3);
        assert.equal(result,3);
    });
    it('Test for addition of -10 and 5', () => {
        const result = functions.subtract(-10,5);
        assert.equal(result,-15);
    });
    it('Test for addition of -14 and -30', () => {
        const result = functions.subtract(-14,-30);
        assert.equal(result,16);
    });
});
describe('Testing multiply function', () => {
    it('Test for multiplication of 6 and 3', () => {
        const result = functions.multiply(6,3);
        assert.equal(result,18);
    });
    it('Test for multiplication of -10 and 5', () => {
        const result = functions.multiply(-10,5);
        assert.equal(result,-50);
    });
    it('Test for multiplication of -4 and -3', () => {
        const result = functions.multiply(-4,-3);
        assert.equal(result,12);
    });
});
describe('Testing divide function', () => {
    it('Test for division of 6 and 3', () => {
        const result = functions.divide(6,3);
        assert.equal(result,2);
    });
    it('Test for division of -10 and 5', () => {
        const result = functions.divide(-10,5);
        assert.equal(result,-2);
    });
    it('Test for division of -5 and -2', () => {
        const result = functions.divide(-5,-2);
        assert.equal(result,2.5);
    });
    it('Test for zero division', () => {
        const result = functions.divide(-5,0);
        assert.equal(result,"Zero Division");
    });
});
describe('Testing for number validation', () => {
    it('Test if text is entered instead of a number', () => {
        const result = functions.divide("vedant",3);
        assert.equal(result,false);
    });
    it('Test if text is entered instead of a number', () => {
        const result = functions.divide("vedant","patel");
        assert.equal(result,false);
    });
    it('Test if number are entered correctly', () => {
        const result = functions.divide(-5,-2);
        assert.equal(result,true);
    });

});
