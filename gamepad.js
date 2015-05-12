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
    var helpful = {1:[1,2],2:[3,4]};
    ext.pressed = function(num){return navigator.getGamepads()[0].buttons[num - 1].pressed};
    ext.when_pressed = function(num){return navigator.getGamepads()[0].buttons[num - 1].pressed};
	ext.stick = function(axis, num){
        if (axis=="up/down"){
          return Math.floor(navigator.getGamepads()[0].axes[helpful[num][1]] * -100);
        } else if (axis == "left/right"){
          return Math.floor(navigator.getGamepads()[0].axes[helpful[num][0]] * 100);
        } else {
          return 0;
        }
       };
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['r', '%m.axis axis of joystick %m.joysticks', 'stick'],
            ['h', 'when button %n pressed', 'when_pressed'],
            ['b', 'button %n pressed?', 'pressed'],
        ],
        menus: {
            axis: ['up/down', 'left/right'],
            joysticks: [1, 2],
        },
        url: 'http://technoboy10.tk/'
    };


    // Register the extension
    ScratchExtensions.register('Gamepad', descriptor, ext);
})({});
