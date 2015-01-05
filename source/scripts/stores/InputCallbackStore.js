var InputActions = require("<root>/scripts/actions/InputActions")
var PlayerActions = require("<root>/scripts/actions/PlayerActions")

var InputCallbackStore = Reflux.createStore({
    data: {
        callbacks: {
            StrokeInput: {
                "north": [PlayerActions.PlayerIsMovingNorth],
                "south": [PlayerActions.PlayerIsMovingSouth],
                "east": [PlayerActions.PlayerIsMovingEast],
                "west": [PlayerActions.PlayerIsMovingWest],
                "northeast": [PlayerActions.PlayerIsMovingNortheast],
                "northwest": [PlayerActions.PlayerIsMovingNorthwest],
            },
            UnstrokeInput: {
            }
        }
    },
    getData: function() {
        return this.data
    },
    init: function() {
        for(var event in InputActions) {
            this.listenTo(InputActions[event],
                          this.handleInput(event))
            //this.data.callbacks[event] = new Object()
        }
    },
    handleInput: function(event) {
        var callbacks = this.data.callbacks[event]
        return function(input) {
            var functions = callbacks[input]
            for(var index in functions) {
                functions[index]()
            }
        }
    }
})

module.exports = InputCallbackStore