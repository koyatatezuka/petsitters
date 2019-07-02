const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { mongoURI } = require('./config/keys');
const { users, profile, auth } = require('./routes/api/index');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', users);
app.use('/profile', profile);
app.use('/auth', auth);

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
