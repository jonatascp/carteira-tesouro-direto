var tesouroDiretoHtml = require('./tesouro-direto-html');
var cheerio = require('cheerio');

var $;
var titulo;

var tesouroDiretoJson = function (callback) {

	tesouroDiretoHtml(function (response) {

		$  = cheerio.load(response);
		
		var arrayTitulosVenda = [];
		/*var titulo = {
			"titulo": "Titulo texto",
			"data": "01/01/2015"
		};
		arrayTitulosVenda.push(titulo);
		titulo = {
			"titulo": "Titulo texto2",
			"data": "01/01/2017"
		};
		arrayTitulosVenda.push(titulo);*/

		

		var initJson = true;
		var numberAttribute = 0;

		$('.portlet-body>table.tabelaPrecoseTaxas .camposTesouroDireto > td').each(function(i, elem) {
			if (initJson) { 
				initJson = false;
				numberAttribute = 0;
				titulo = {
					"titulo": i,
					"vencimento": i,
					"taxaRendimento": "",
					"valorMinimo": "",
					"precoUnitario": ""
				};
			}
			
			if (numberAttribute == 0) {
				titulo.titulo = $(this).html();
			}
			if (numberAttribute == 1) {
				titulo.vencimento = $(this).html();
			}
			if (numberAttribute == 2) {
				titulo.taxaRendimento = $(this).html();
			}
			if (numberAttribute == 3) {
				titulo.valorMinimo = $(this).html();
			}
			if (numberAttribute == 4) {
				titulo.precoUnitario = $(this).html();
			}

			numberAttribute++;

			if ((i+1) % 5 == 0) { 
				initJson = true;
				arrayTitulosVenda.push(titulo);
			}
		});

		var json = {
		  "titulos-venda": arrayTitulosVenda
		};

		return callback(json);
	});
};

module.exports = tesouroDiretoJson;