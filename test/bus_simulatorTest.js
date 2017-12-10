const assert = require('chai').assert
const constant = require('./../src/constants.js')
const busSimulation = require('./../src/bus_simulator.js')

describe('Bus_simulator', function () {
  it('SUCCESS', function () {
    assert.equal(busSimulation(), constant.SUCCESS)
  })
})
