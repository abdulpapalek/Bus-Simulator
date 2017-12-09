let constant = require('./constants.js');
const state = {
		xposition:null,
		yposition:null,
		cardinaldirection:null
	  }

module.exports = {
    retrievexy		  	 : function(command){
								return command.match(constant.RETRIEVECOORDINATES);
						   },
    checkPlaceValidity	 : function (command){
								var input = constant.SPECIALCHARACTERPATTERN.test(command);
								if(input == false){
									return constant.PLACEBUSPATTERN.test(command);
								}
								return false;
						   },
	findCardinalDirection: function (command){
								var cardinaldirection = null;
								constant.CARDINALDIRECTIONS.some(function(direction) {
														let pos = command.search(direction);
														if(pos != constant.NOTFOUND){
															cardinaldirection = direction;
															return true;
														}
								});
								return cardinaldirection;
							},
	placeBus            : function (command){
								if(this.checkPlaceValidity(command) == false){
									return constant.FAIL;
								}
								var cardinaldirection = this.findCardinalDirection(command);
								if(this.findCardinalDirection(command) == null){
									return constant.FAIL;
								}

								var coordinates = this.retrievexy(command);
								state.xposition = coordinates[0];
								state.yposition = coordinates[1];
								state.cardinaldirection = cardinaldirection;
								return constant.SUCCESS;
						  },
	moveBus				: function (){
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
						 },

	reportBusPostion    : function (){
							    console.log(state.xposition+","+state.yposition+","+state.cardinaldirection);
						  },

	shiftPosition		: function (position){
								var index = constant.CARDINALDIRECTIONS.indexOf(state.cardinaldirection);
								switch(position){
								    case constant.RIGHT:
								    	state.cardinaldirection = constant.CARDINALDIRECTIONS[(index + 1) % 
								    							  constant.CARDINALDIRECTIONS.length];
								        break;
								    case constant.LEFT:
								    	state.cardinaldirection = constant.CARDINALDIRECTIONS[(index + 
								    							  constant.CARDINALDIRECTIONS.length - 1)% 
								    							  constant.CARDINALDIRECTIONS.length];										    		  
								        break;
								    default:
								        break;
								}
						} 					

}
