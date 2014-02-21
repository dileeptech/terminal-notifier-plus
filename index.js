var cp = require('child_process');

var exec = '/Contents/MacOS/terminal-notifier'

var app = __dirname + '/notify.app' + exec;

var formatOptions = function(opts) {
	
	var options = [];
	
	for(var option in opts) {
		
		if(opts.hasOwnProperty(option)) {
			
			options.push('-' + option);
			
			options.push(opts[option]);
		}
		
	}
	
	return options;
}


exports.notify = function(options, callback) {
	
	options.sender = options.sender || 'com.apple.Terminal';
	
	var args = formatOptions(options);
	
	cp.execFile(app, args, null, callback);
}