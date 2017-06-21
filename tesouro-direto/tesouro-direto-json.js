var tesouroDiretoHtml = require('./tesouro-direto-html');
var cheerio = require('cheerio');

var $;
var titulo;

var tesouroDiretoJson = function (callback) {

	tesouroDiretoHtml(function (response) {

		$  = cheerio.load(response);
		

		var json = {
		  "content": ''//$('.camposTesouroDireto').length
		};

		var initJson = true;

		$('.portlet-body>table.tabelaPrecoseTaxas .camposTesouroDireto > td').each(function(i, elem) {
			if (initJson) { 
				console.log('INIT');
				initJson = false;
			}
			console.log($(this).html());
			if ((i+1) % 5 == 0) { console.log('END');initJson = true;}
		});

		return callback(json);
	});
};

module.exports = tesouroDiretoJson;