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

		$('.portlet-body>table.tabelaPrecoseTaxas .camposTesouroDireto > td').each(function(i, elem) {
		  console.log($(this).html());
		});

		return callback(json);
	});
};

module.exports = tesouroDiretoJson;