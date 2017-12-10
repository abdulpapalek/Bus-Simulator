const commands = require('./../command.json')
let constant = require('./constants.js')
const UtilityMethods = require('./utils.js')

module.exports = function () {
  var initialPositionFlag = false
  const commandList = commands.command
  var pos = 0
  commandList.forEach(function (command) {
    // check for the PLACE prefix
    pos = command.search(constant.PLACE)
    if (pos === constant.FOUND) {
      let valid = UtilityMethods.placeBus(command)
      if (valid === constant.FAIL) {
        return
      }
      if (initialPositionFlag === false) {
        initialPositionFlag = true
      }
      return
    }
    if (initialPositionFlag === false) {
      return
    }
    switch (command) {
      case constant.MOVE:
        UtilityMethods.moveBus()
        break
      case constant.LEFT:
        UtilityMethods.rotatePosition(constant.LEFT)
        break
      case constant.RIGHT:
        UtilityMethods.rotatePosition(constant.RIGHT)
        break
      case constant.REPORT:
        UtilityMethods.reportBusPostion()
        break
      default:
        break
    }
  })
  return constant.SUCCESS
}
