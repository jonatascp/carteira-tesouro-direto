var fs = require('fs');

var validarDataProcessamento = function(json) {

	var lastDateProcessed = fs.readFileSync(__dirname + '/data.log');
	var lastDateRequest = json.data;

	console.log('Data último processamento: ' + lastDateProcessed + ' Data da requisição: ' + lastDateRequest);

	return lastDateProcessed == lastDateRequest;
};

module.exports = validarDataProcessamento;