var fs = require('fs');
var schedule = require('node-schedule');
var tesouroDiretoJson = require('./tesouro-direto-json');

tesouroDiretoJson(function (json) {
    var dadosTesouro = '\nData: ' + json.data;
    dadosTesouro += '\n>>>>Títulos para Investir';
    for (index in json.titulosInvestir) {
		dadosTesouro += '\n' + json.titulosInvestir[index].titulo + '\t' + json.titulosInvestir[index].vencimento + '\t' + json.titulosInvestir[index].taxaRendimento + '\t' + json.titulosInvestir[index].valorMinimo + '\t' + json.titulosInvestir[index].precoUnitario;
	}
    
    fs.appendFile('data.log', dadosTesouro, function (err) {
	   if (err) return console.log(err);
	   console.log('Processamento realizando em: ' + new Date());
	});

	var j = schedule.scheduleJob('15 * * * * *', function(){
	  console.log('Teste do schedule!');
	});

});
