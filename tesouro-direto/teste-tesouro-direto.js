var fs = require('fs');
var schedule = require('node-schedule');
var validarDataProcessamento = require('./validar-data-processamento');
var updateLastDate = require('./update-last-date');
var updateData = require('./update-data');
var tesouroDiretoJson = require('./tesouro-direto-json');

var j = schedule.scheduleJob('*/10 * * * * *', function(){
	tesouroDiretoJson(function (json) {
		var isProcessar = validarDataProcessamento(json);
	 	if (isProcessar) {
			updateLastDate(json);
			updateData(json);
		} 
	});
});


