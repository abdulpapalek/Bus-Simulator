const assert = require('chai').assert;
const constant = require('./../src/constants.js');
const UtilityMethods = require('./../src/utils.js');
//Min
describe('retrievexy',function(){
	it('0,5',function(){
		assert.equal(UtilityMethods.retrievexy("PLACE 0,5,EAST"), "0,5");
	});
});
//MID
describe('retrievexy',function(){
	it('3,3',function(){
		assert.equal(UtilityMethods.retrievexy("PLACE 3,3,EAST"), "3,3");
	});
});
//MAX
describe('retrievexy',function(){
	it('5,0',function(){
		assert.equal(UtilityMethods.retrievexy("PLACE 5,0,EAST"), "5,0");
	});
});
//WEST
describe('retrievexy',function(){
	it('-5,0',function(){
		assert.equal(UtilityMethods.retrievexy("PLACE -5,0,EAST"), "-5,0");
	});
});
//SOUTH
describe('retrievexy',function(){
	it('0,-5',function(){
		assert.equal(UtilityMethods.retrievexy("PLACE 0,-5,EAST"), "0,-5");
	});
});
//Valid Command
describe('checkPlaceValidity',function(){
	it('Valid Command',function(){
		assert.equal(UtilityMethods.checkPlaceValidity("PLACE 4,4,NORTH"), true);
	});
});
//Invalid Command(special Character)
describe('Invalid Command(special Character)',function(){
	it('Invalid Command(special Character)',function(){
		assert.equal(UtilityMethods.checkPlaceValidity("PLACE 4,4,NORTH&"), false);
	});
});
//Invalid Command(extra space after comma)
describe('checkPlaceValidity',function(){
	it('Invalid Command(extra space after comma)',function(){
		assert.equal(UtilityMethods.checkPlaceValidity("PLACE 4,4, NORTH"), false);
	});
});
//Invalid Command(coordinates more than 5)
describe('checkPlaceValidity',function(){
	it('Invalid Command(coordinates more than 5)',function(){
		assert.equal(UtilityMethods.checkPlaceValidity("PLACE 7,6,NORTH"), false);
	});
});
//NORTH
describe('findCardinalDirection',function(){
	it('NORTH',function(){
		assert.equal(UtilityMethods.findCardinalDirection("PLACE 7,6,NORTH"), 'NORTH');
	});
});
//SOUTH
describe('findCardinalDirection',function(){
	it('SOUTH',function(){
		assert.equal(UtilityMethods.findCardinalDirection("PLACE 7,6,SOUTH"), 'SOUTH');
	});
});
//EAST
describe('findCardinalDirection',function(){
	it('EAST',function(){
		assert.equal(UtilityMethods.findCardinalDirection("PLACE 7,6,EAST"), 'EAST');
	});
});
//WEST
describe('findCardinalDirection',function(){
	it('WEST',function(){
		assert.equal(UtilityMethods.findCardinalDirection("PLACE 7,6,WEST"), 'WEST');
	});
});
//null
describe('findCardinalDirection',function(){
	it('null',function(){
		assert.equal(UtilityMethods.findCardinalDirection("PLACE 7,6,SOu"), null);
	});
});
//fail
describe('placeBus',function(){
	it('FAIL',function(){
		assert.equal(UtilityMethods.placeBus("PLACE 7, 6,SOUTH*&"), constant.FAIL);
	});
});
//fail
describe('placeBus',function(){
	it('FAIL',function(){
		assert.equal(UtilityMethods.placeBus("PLACE 7, 6,TSEW"), constant.FAIL);
	});
});
//success
describe('placeBus',function(){
	it('SUCCESS',function(){
		assert.equal(UtilityMethods.placeBus("PLACE 0,0,SOUTH"), constant.SUCCESS);
	});
});
//success
describe('placeBus',function(){
	it('SUCCESS',function(){
		assert.equal(UtilityMethods.placeBus("PLACE 5,5,NORTH"), constant.SUCCESS);
	});
});
//MOVE
describe('moveBus',function(){
	it('undefined',function(){
		assert.equal(UtilityMethods.moveBus("MOVE"), undefined);
	});
});
//MOVE
describe('reportBusPostion',function(){
	it('undefined',function(){
		assert.equal(UtilityMethods.reportBusPostion(), undefined);
	});
});
//SHIFT to the right
describe('rotatePosition',function(){
	it('undefined',function(){
		assert.equal(UtilityMethods.rotatePosition(constant.RIGHT), undefined);
	});
});
//SHIFT to the left
describe('rotatePosition',function(){
	it('undefined',function(){
		assert.equal(UtilityMethods.rotatePosition(constant.LEFT), undefined);
	});
});	