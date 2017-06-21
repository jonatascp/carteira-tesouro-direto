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

		$('.tabelaPrecoseTaxas .camposTesouroDireto > td').each(function(i, elem) {
		  console.log($(this).html());
		  //
		  if (i == 0) {
		  	// var array = $(this).html();
			//titulo = cheerio.load($(this).html());
			//console.log(titulo('td'));
		  	//console.log('>>>>>' + i);

		  	// console.log($(this).html());

		  	//titulo = cheerio.load($(this).html());
		  	//titulo.each(function(i, elem) {
		  	//	console.log(this);
		  	//});

		  }
		});

		return callback(json);
	});
};

module.exports = tesouroDiretoJson;