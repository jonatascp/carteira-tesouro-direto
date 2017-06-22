var fs = require('fs');

var updateLastDate = function(json) {

	fs.truncateSync(__dirname + '/data.log');
	fs.appendFile(__dirname + '/data.log', json.data, function (err) {
   		if (err) return console.log(err);
   	});
};

module.exports = updateLastDate;