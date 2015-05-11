(function(ext) {
    var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery || navigator.msBattery;
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        if (battery) {
        return {status: 2, msg: 'Ready'};
        } else {
        return {status: 1, msg: 'Battery API not supported - use Firefox!'};
        }
    };
    
    ext.val = function(){
		return (battery.level * 100);
	};
	
	  ext.charging = function(){
	  return battery.charging;
	  }
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['r', 'battery percentage', 'val'],
            ['b', 'battery charging?', 'charging']
        ],
        url: 'http://technoboy10.tk/'
    };


    // Register the extension
    ScratchExtensions.register('Battery Status', descriptor, ext);
})({});
