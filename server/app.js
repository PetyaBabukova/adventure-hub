const express = require('express');
const request = require('request');

const app = express();
const port = 5000;

app.listen(port, () => {
	console.log(`Adventure Channel is running on port ${port}`)
});

app.get('/', (req, res) => {
	res.send('Hello World!');
	res.end();
});


app.get('/posts', (req, res) => {
	res.send('If i can');
	res.end()
});

app.get('/weather', (req, res) => {
	console.log(req.body);
	request('http://api.weatherstack.com/current?access_key=9209c11e92ec968c4c3a8f0380a49a44&query=Sofia', function (err, response, body) {
		if (!err && response.statusCode == 200) {
			const parsedBody = JSON.parse(body);
			const temperature = parsedBody['current']['temperature'];
			res.send({parsedBody});

		}
	})
})
