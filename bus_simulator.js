const commands = require('./command.json');
//const constant = require('./constant.json');
var state = {
		xposition:null,
		yposition:null,
		cadinaldirection:null
	  }
let constant = require('./constants.js');
function busSimulation(){
	//console.log(commands.command);
	var initialPositionFlag = false;
	const commandList = commands.command;
	var pos = 0;
	commandList.forEach(function(command){
		//check for the PLACE prefix
		pos = command.search(constant.PLACE);
		if(pos == 0){
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
		pos = command.search("/^[a-z0-9_@./#&+-,]*$/");
		if(pos > -1){
			return;
		}
		switch(command) {
		    case constant.MOVE:
		        moveBus();
		        break;
		    case constant.LEFT:
		        shiftPosition(constants.LEFT);
		        break;
		    case constant.RIGHT:
		        shiftPosition(constants.RIGHT);
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
	var coordinates = retrievexy(command); 
}
function moveBus(){

}

function reportBusPostion(){

}

function shiftPosition(){

}

function retrievexy(command){
	return command.match(/[0-9]+/g);
}

function checkPlaceValidity(command){
	var input = specialCharacterPattern.test(command);
	if(input == false){
		return placeBusPattern.test(command);
	}
	return false;
}
busSimulation();

