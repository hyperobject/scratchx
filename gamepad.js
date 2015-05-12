(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        if (!navigator.getGamepads || !navigator.gamepads) {
        return {status: 2, msg: 'Ready'};
        } else {
        return {status: 1, msg: 'Gamepad API not supported - use Firefox!'};
        }
    };
    
    ext.pressed = function(num){return navigator.getGamepads()[0].buttons[num - 1].pressed};
    ext.when_pressed = function(num){return navigator.getGamepads()[0].buttons[num - 1].pressed};
	
	  ext.charging = function(){
	  return battery.charging;
	  }
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['h', 'when button %n pressed', 'when_pressed'],
            ['b', 'button %n pressed?', 'pressed']
        ],
        url: 'http://technoboy10.tk/'
    };


    // Register the extension
    ScratchExtensions.register('Gamepad', descriptor, ext);
})({});
