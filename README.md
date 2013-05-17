# vatjs
### Please note
Due to some unmerged bugs / pull requests (regarding a WSDL desctiption inside the WSDL uri) in node **soap** module i had to hard-core include this fork of it [https://github.com/jobe451/node-soap](https://github.com/jobe451/node-soap), i would like to remove and add it as an npm dependencie as soon as this bug will be fixed.

Clone this repository

```
git clone https://github.com/kimar/vatjs.git
```


At the time of writing this, there is an unfixed issue in the node soap module which let's soap fail to do a request on the vat service wsdl. To resolve this you have to do the following:

```
npm install
cd node_modules && rm -rf soap && git clone https://github.com/kimar/node-soap.git soap && cd ..
```

Now start the app using the node command:

```
node app.js
```

Open up your browser and attach the VAT-ID to your URI:

```
http://0.0.0.0:3000/IT02442790214
```

The server should respond respectively:

```
{
	result: "ok",
	description: "checkVatService responds correctly",
	details: {
		countryCode: "IT",
		vatNumber: "02442790214",
		requestDate: "2013-05-16+02:00",
		valid: true,
		name: "GABRIEL GRITSCH SOFTWARE DEVELOPMENT",
		address: "VIA TERZO DI SOTTO 1639042 BRESSANONE .BRIXEN. BZ"
	}
}
```
