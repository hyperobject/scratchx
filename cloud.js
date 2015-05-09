(function(ext) {
    
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    ext.grab = function(name, id, callback){
		$.getJSON('http://crossorigin.me/http://scratch.mit.edu/varserver/' + id, function(json){
			console.log(json);
			for (var i=0; i<json['variables'].length; i++){
				console.log(json['variables'][i])
				if (json['variables'][i]['name'] == "☁ " + name){
					console.log(json['variables'][i]['name']);
					callback(json['variables'][i]["value"]);
				}
			}
		
		});
	};
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['R', '☁%s from project ID %n', 'grab'],
        ],
        url: 'http://technoboy10.tk/'
    };


    // Register the extension
    ScratchExtensions.register('Cloud Data', descriptor, ext);
})({});
