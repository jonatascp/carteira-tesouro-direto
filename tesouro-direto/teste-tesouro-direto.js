var fs = require('fs');
var schedule = require('node-schedule');
var tesouroDiretoJson = require('./tesouro-direto-json');

tesouroDiretoJson(function (json) {
    var dadosTesouro = 'Data: ' + json.data;
    dadosTesouro += '\n>>>>Títulos para Investir<<<<<';
    for (index in json.titulosInvestir) {
		dadosTesouro += '\n' + json.titulosInvestir[index].titulo + '\t' + json.titulosInvestir[index].vencimento + '\t' + json.titulosInvestir[index].taxaRendimento + '\t' + json.titulosInvestir[index].valorMinimo + '\t' + json.titulosInvestir[index].precoUnitario;
	}
	dadosTesouro += '\n>>>>Títulos para Resgatar<<<<<';
	for (index in json.titulosResgatar) {
		dadosTesouro += '\n' + json.titulosResgatar[index].titulo + '\t' + json.titulosResgatar[index].vencimento + '\t' + json.titulosResgatar[index].taxaRendimento + '\t' + json.titulosResgatar[index].precoUnitario + '\n';
	}
    
    var lastDateProcessed = fs.readFileSync('data.log');
	var lastDateRequest = json.data;

	if (lastDateProcessed == lastDateRequest) {
		console.log('Nada a processar em: ' + new Date());
	} else {
		fs.truncateSync('data.log');
		fs.appendFile('data.log', lastDateRequest, function (err) {
	   		if (err) return console.log(err);
	   	});

		fs.appendFile('dados.log', dadosTesouro, function (err) {
	   		if (err) return console.log(err);
	   		console.log('Processamento realizando em: ' + new Date());
		});
	}

	/*var j = schedule.scheduleJob('15 * * * * *', function(){
	  console.log('Teste do schedule!');
	});*/

});
