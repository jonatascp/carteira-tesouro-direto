var http = require('http');
var registrarError = require('./registrar-error');

var options = {
    host: 'tesouro.fazenda.gov.br',
    path: '/tesouro-direto-precos-e-taxas-dos-titulos'
}

var tesouroDiretoHtml = function (callback) {
	var contentHtml = '';

	var request = http.request(options, function (res) {
	    res.on('data', function (data) {
	    	contentHtml += data;
	    });
	    res.on('end', function () {
	    	return callback(contentHtml);
	    });
	});
	request.on('error', function (e) {
	    registrarError(e);
	});

	request.end();

};

module.exports = tesouroDiretoHtml;