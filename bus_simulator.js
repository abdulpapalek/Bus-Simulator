const commands = require('./command.json');
let constant = require('./constants.js');
const PLACEBUSPATTERN = /(PLACE) [0-5],[0-5],[A-Z]+/g;
const SPECIALCHARACTERPATTERN = /[!@#$%^&*()_+\-=\[\]{};':\\|.<>\/?]+/;
const RETRIEVECOORDINATES = /[0-9]+/g;
const CHECKNUMERICSPECIALCHAR = /^[a-z0-9_@./#&+-,]*$/;
var state = {
		xposition:null,
		yposition:null,
		cardinaldirection:null
	  }
function busSimulation(){
	//console.log(commands.command);
	var initialPositionFlag = false;
	const commandList = commands.command;
	var pos = 0;
	commandList.forEach(function(command){
		//check for the PLACE prefix
		pos = command.search(constant.PLACE);
		if(pos == constant.FOUND){
			let valid = placeBus(command);
			if(valid == constant.FAIL){
				return;
			}
			initialPositionFlag = true;
			return;		
		}

		if(initialPositionFlag == false){			
			return;
		}
		//check for numeric, special characters and lower case characters
		pos = command.search(CHECKNUMERICSPECIALCHAR);
		if(pos > constant.NOTFOUND){
			return;
		}
		switch(command) {
		    case constant.MOVE:
		        moveBus();
		        break;
		    case constant.LEFT:
		        shiftPosition(constant.LEFT);
		        break;
		    case constant.RIGHT:
		        shiftPosition(constant.RIGHT);
		        break;
		    case constant.REPORT:
		        reportBusPostion();
		        break;
		    default:
		        break;
		}
	});
}
function placeBus(command){
	if(checkPlaceValidity(command) == false){
		return constant.FAIL;
	}
	if(findCardinalDirection(command) == constant.NOTFOUND){
		return constant.FAIL;
	}

	var coordinates = retrievexy(command);
	state.xposition = coordinates[0];
	state.yposition = coordinates[1];
	
	return constant.SUCCESS;
}
function moveBus(){
	switch(state.cardinaldirection){
	    case constant.NORTH:
	        state.xposition++;
	        if(state.xposition > constant.MAX){
	        	state.xposition--;
	        }
	        break;
	    case constant.SOUTH:
	        state.xposition--;
	        if(state.xposition < constant.MIN){
	        	state.xposition++;
	        }
	        break;
	    case constant.EAST:
	        state.yposition++;
	        if(state.yposition > constant.MAX){
	        	state.yposition--;
	        }
	        break;
	    case constant.WEST:
	        state.yposition--;
	        if(state.yposition < constant.MIN){
	        	state.yposition++;
	        }
	        break;
	    default:
	        break;
	}
}

function reportBusPostion(){
	console.log(state.xposition+","+state.yposition+","+state.cardinaldirection);
}

function shiftPosition(position){
	var index = constant.CARDINALDIRECTIONS.indexOf(state.cardinaldirection);
	switch(position){
	    case constant.RIGHT:
	    	state.cardinaldirection = constant.CARDINALDIRECTIONS[(index + 1) % 
	    											    constant.CARDINALDIRECTIONS.length];
	        break;
	    case constant.LEFT:
	    	state.cardinaldirection = constant.CARDINALDIRECTIONS[(index + constant.CARDINALDIRECTIONS.length - 1)% 
	    											    		  constant.CARDINALDIRECTIONS.length];
	        break;
	    default:
	        break;
	}
}

function retrievexy(command){
	return command.match(RETRIEVECOORDINATES);
}

function checkPlaceValidity(command){
	var input = SPECIALCHARACTERPATTERN.test(command);
	if(input == false){
		return PLACEBUSPATTERN.test(command);
	}
	return false;
}

function findCardinalDirection(command){
	var pos = constant.NOTFOUND;
	constant.CARDINALDIRECTIONS.some(function(direction) {
		pos = command.search(direction);
		if(pos != constant.NOTFOUND){
			state.cadinaldirection = direction;
			return true;
		}
	});
	if(pos != constant.NOTFOUND){
		pos = constant.FOUND;
	}
	return pos;
}


busSimulation();
