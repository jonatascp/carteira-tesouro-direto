var fs = require('fs');
var schedule = require('node-schedule');
var validarDataProcessamento = require('./validar-data-processamento');
var updateLastDate = require('./update-last-date');
var updateData = require('./update-data');
var tesouroDiretoJson = require('./tesouro-direto-json');

tesouroDiretoJson(function (json) {
    
    if (validarDataProcessamento(json)) {
		console.log('Nada a processar em: ' + new Date());
	} else {
		updateLastDate(json);
		updateData(json);
	}

	/*var j = schedule.scheduleJob('15 * * * * *', function(){
	  console.log('Teste do schedule!');
	});*/

});
