var fs = require('fs');

var registrarError = function(error) {

	fs.truncateSync(__dirname + '/error.log');
	fs.appendFile(__dirname + '/error.log', error, function (err) {
   		if (err) return console.log(err);
   	});
};

module.exports = registrarError;