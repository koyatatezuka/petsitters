const express = require('express');
const mongoose = require('mongoose');

const { mongoURI } = require('./config/keys');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
	.connect(mongoURI, {
		useNewUrlParser: true
	})
	.then(() => {
		console.log('MongoDB connected...');
	})
	.catch(err => {
		console.log(err);
	});

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});
