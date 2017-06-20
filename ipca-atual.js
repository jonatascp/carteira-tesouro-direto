var http = require('http');
var cheerio = require('cheerio');
var $;
var data = '';

var options = {
    host: 'conteudo.bcb.gov.br',
    path: '/api/feed/pt-br/PAINEL_INDICADORES/juros'
}
var request = http.request(options, function (res) {
    res.on('data', function (chunk) {
        data += chunk;
    });
    res.on('end', function () {
        $  = cheerio.load(data);
        //$('entry>updated').each(function(i, elem) {
          //console.log($(this).text());
        //});
        console.log($('entry>updated').text());


    });
});
request.on('error', function (e) {
    console.log(e.message);
});
request.end();
