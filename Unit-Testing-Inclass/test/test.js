const assert = require('assert');
const add = require('../Demo_app/app').add;

describe('Testing add function', () => {
    it('testing to add 1 and 7', () => {
        const result = add(1,7);
        assert.equal(result,8);
    });
    it('testing to add 4 and 7', () => {
        const result = add(4,7);
        assert.equal(result,11);
    });
});