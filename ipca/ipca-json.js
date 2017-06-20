var ipcaHtml = require('./ipca-html');
var cheerio = require('cheerio');

var $;
var divs;

var ipcaJson = function (callback) {

	ipcaHtml(function (response) {

		$  = cheerio.load(response);
		divs = cheerio.load($('entry>content').text());

		var json = {
		  "date-update": $('entry>updated').text(),
		  "title": $('entry>title').text(),
		  "rate": { "value": divs('#ratevalue').text(),
		  			"date": divs('#ratedate').text()
		  		},
		  "daily": { "value": divs('#dailyratevalue').text(),
		  			"date": divs('#dailyratedate').text()
		  		}		
		};

		return callback(json);
	});
};

module.exports = ipcaJson;