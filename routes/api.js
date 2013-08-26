exports.check = function (req, res) {
	try {
		var url = require('url');
		var path = require('path');
		var soap = require('soap');

		vatid = path.basename(decodeURI(url.parse(req.url).pathname)).toString();
		args = {countryCode: vatid.slice(0, 2), vatNumber: vatid.slice(2)};
		console.log('vatid: ' + vatid);
		console.log('args: ' + args);

		soap.createClient('http://ec.europa.eu/taxation_customs/vies/checkVatService.wsdl', function(err, client) {
	     	client.checkVat(args, function(err, result) {
	     		res.set('Content-Type', 'application/json');

	          	if(err) {
	  				res.error({code: 400, msg: 'invalid request'});
	          	}
	          	else {
	  				res.send(JSON.stringify({error: null, result: {countryCode: result.countryCode, vatNumber: result.vatNumber, requestDate: result.requestDate, valid: result.valid, name: result.name, address: result.address}})); 
	          	}
	      	});
	  	});
	}
	catch (e) {
		res.error({code: 400, msg: 'invalid request'});
	}
}