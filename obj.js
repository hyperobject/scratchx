(function(ext) {
    
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    ext.grab = function(url, callback){
		$.get('http://crossorigin.me/' + url, function(data){
			callback(data.slice(1, data.length-1));
		});
	};
	
	ext.parse = function(key, obj){
		return $.parseJSON(obj)[key];
	}
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['R', 'get JSON from URL %s', 'grab'],
			['r', 'key %s from JSON %s', 'parse']
        ],
        url: 'http://technoboy10.tk/'
    };


    // Register the extension
    ScratchExtensions.register('JSON', descriptor, ext);
})({});
