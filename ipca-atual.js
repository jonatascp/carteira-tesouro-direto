var http = require('http');
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
        console.log('tratar requisicao');
        console.log(data);

    });
});
request.on('error', function (e) {
    console.log(e.message);
});
request.end();
