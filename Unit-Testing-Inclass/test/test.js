const assert = require('assert');
const add = require('../Demo_app/app').add;
const welcomeMessage = require('../Demo_app/app').welcomeMessage;
const checkEquality = require('../Demo_app/app').checkEquality;

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

describe("Welcome message function", () => {
    it("testing weather correct greeting is displayed", () => {
        const result = welcomeMessage();
        assert.equal(result,"Hello World!");
    });
});

describe("Check Equality function", () => {
    it("testing weather number 2 is equal to 2", () =>{
        const result = checkEquality(2,2);
        assert.equal(result,true);
    });
    it("testing weather string 'two' is equal to 'two", () =>{
        const result = checkEquality("two","two");
        assert.equal(result,true);
    });
});