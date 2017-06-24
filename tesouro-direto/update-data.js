var fs = require('fs');

var updateData = function(json) {

	var dadosTesouro = 'Data: ' + json.data;
    dadosTesouro += '\n>>>>Títulos para Investir<<<<<';
    for (index in json.titulosInvestir) {
		dadosTesouro += '\n' + json.titulosInvestir[index].titulo + '\t' + json.titulosInvestir[index].vencimento + '\t' + json.titulosInvestir[index].taxaRendimento + '\t' + json.titulosInvestir[index].valorMinimo + '\t' + json.titulosInvestir[index].precoUnitario;
	}
	dadosTesouro += '\n>>>>Títulos para Resgatar<<<<<';
	for (index in json.titulosResgatar) {
		dadosTesouro += '\n' + json.titulosResgatar[index].titulo + '\t' + json.titulosResgatar[index].vencimento + '\t' + json.titulosResgatar[index].taxaRendimento + '\t' + json.titulosResgatar[index].precoUnitario;
	}
	dadosTesouro += '\n';

	fs.appendFile(__dirname + '/dados.log', dadosTesouro, function (err) {
   		if (err) return console.log(err);
	});
};

module.exports = updateData;