# vatjs
### version 1.0.0
### Please note

Due to some unmerged bugs / pull requests (regarding a WSDL desctiption inside the WSDL uri) in node **soap** module I forked, and morged some bugfixes into it, node-soap inside the package.json now points to [my node-soap fork ](https://github.com/kimar/node-soap)

![Screenshot](http://kimar.github.io/screenshots/vatjs/1.0.0/vatjs1.png)
![Screenshot](http://kimar.github.io/screenshots/vatjs/1.0.0/vatjs2.png)
![Screenshot](http://kimar.github.io/screenshots/vatjs/1.0.0/vatjs3.png)

Clone this repository

```
git clone https://github.com/kimar/vatjs.git
```

Install all dependencies

```
npm install
```

Now start the app using the node command:

```
node app.js
```

Optionally do some configuration

```
vim config.json
```

Open up your browser, enter a VAT-ID and check it...

```
http://0.0.0.0:3000
```

Or use the RESET-Service in your Apps:

```
http://0.0.0.0:3000/api/check/IT02442790214
```

The server should respond respectively:

```
{
	error: null,
	details: {
		countryCode: "DE",
		vatNumber: "12345678901",
		requestDate: "2013-08-26+02:00",
		valid: true,
		name: "---",
		address: "---"
	}
}
```

This App uses the EU-VAT-ID Check API SOAP WebService, depending on the VAT-IDs Country and other parameters, sometimes the full Name / Address is shown, sometime it's not. This is not a bug ;-)

**The MIT License (MIT)**

Copyright (c) 2013 Marcus Kida

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
