'use strict';

let constants = {
    SUCCESS  : "SUCCESS",
    FAIL     : "FAIL",
    PLACE    : "PLACE",
    MOVE     : "MOVE",
    LEFT     : "LEFT",
    RIGHT    : "RIGHT",
    NORTH    : "NORTH",
    SOUTH    : "SOUTH",
    EAST     : "EAST",
    WEST     : "WEST",
    REPORT 	 : "REPORT",
    NOTFOUND : -1,
    FOUND    : 0,
    MAX		 : 5,
    MIN      : -5,
    CARDINALDIRECTIONS : ["NORTH",
			              "WEST",
			              "SOUTH",
			              "EAST"
			             ]  
};

module.exports =
        Object.freeze(constants);