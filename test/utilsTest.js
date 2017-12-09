const assert = require('chai').assert;
const constant = require('./../src/constants.js');
const UtilityMethods = require('./../src/utils.js');

describe('retrievexy',function(){
	it('1,2',function(){
		assert.equal(UtilityMethods.retrievexy("PLACE 1,2,EAST"), "1,2");
	});
});