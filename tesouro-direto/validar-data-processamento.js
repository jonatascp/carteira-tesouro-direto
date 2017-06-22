var fs = require('fs');

var validarDataProcessamento = function(json) {

	var lastDateProcessed = fs.readFileSync(__dirname + '/data.log');
	var lastDateRequest = json.data;

	return lastDateProcessed == lastDateRequest;
};

module.exports = validarDataProcessamento;