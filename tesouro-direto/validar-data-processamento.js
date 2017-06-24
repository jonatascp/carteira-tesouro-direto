var fs = require('fs');

var validarDataProcessamento = function(json) {

	var lastDateProcessed = fs.readFileSync(__dirname + '/data.log');
	var lastDateRequest = json.data;

	if (!lastDateRequest) {
		return false;
	} else {
		return lastDateProcessed != lastDateRequest;
	}
};

module.exports = validarDataProcessamento;