'use strict';

const PLACEBUSPATTERN = new RegExp("/(PLACE) [0-5],[0-5],[A-Z]+/g");
const SPECIALCHARACTERPATTERN = new RegExp("/[!@#$%^&*()_+\-=\[\]{};':\\|.<>\/?]+/");

let constants = {
    SUCCESS: "SUCCESS",
    FAIL   : "FAIL",
    PLACE  : "PLACE",
    MOVE   : "MOVE",
    LEFT   : "LEFT",
    RIGHT  : "RIGHT",
    NORTH  : "NORTH",
    SOUTH  : "SOUTH",
    EAST   : "EAST",
    WEST   : "WEST",
    REPORT : "REPORT",
    PLACEBUSPATTERN:PLACEBUSPATTERN,
	SPECIALCHARACTERPATTERN:SPECIALCHARACTERPATTERN     
};

module.exports =
        Object.freeze(constants);