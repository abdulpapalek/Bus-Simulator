var commands = require('./command.json');
var constant = require('./constant.json');
state = {
	xposition:null,
	yposition:null,
	direction:null
}

function bus_simulation(){
	//console.log(commands.command);
	var initialPositionFlag = false;
	var prefix = constant.prefix;
	var cardinalDirection = constant.cardinal_direction;
	var commandList = commands.command;
	commandlist.forEach(function(command){

		if(initialPositionFlag == false){
			var pos = command.search("PLACE");
			if(pos != 1){
				continue;
			}
			initialPositionFlag == true
		}
		else{

		}
	});
}
function place_bus(){

}
function move_bus(){

}
function report_bus_postion(){

}
function extract_prefix(){

}
bus_simulation();

