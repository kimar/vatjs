var http = require('http'),
	soap = require('soap'),
	url = require('url'),
	path = require("path");

http.createServer(function(req, res) {

	var vatid = path.normalize(decodeURI(url.parse(req.url).pathname)).toString();

	var args = {countryCode: vatid.slice(1,3), vatNumber: vatid.slice(3)};
  	soap.createClient('http://ec.europa.eu/taxation_customs/vies/checkVatService.wsdl', function(err, client) {
      	client.checkVat(args, function(err, result) {
          	console.log(result);

          	if(err) {

          		res.writeHead(400, {'Content-Type': 'application/json'});
  				res.end(JSON.stringify({result: 'error', description: 'checkVatService does not accept this request (please check VATID)'})); 

          	}
          	else {

          		res.writeHead(200, {'Content-Type': 'application/json'});
  				res.end(JSON.stringify({result: 'ok', description: 'checkVatService responds correctly', details: {countryCode: result.countryCode, vatNumber: result.vatNumber, requestDate: result.requestDate, valid: result.valid, name: result.name, address: result.address}})); 

          	}
      	});
  	});

}).listen(3000);