const express = require('express');
const mongoose = require('mongoose');

const PORT = 5050;

const app = express();

mongoose.connect(
	'mongodb+srv://paolo12691:1019Bebo@paolo12691.kchsnkr.mongodb.net/'
);
useNewUrlParser: true;
useUnifiedTopology: true;

const db = mongoose.connection;
db.on(
	error,
	console.error.bind(console, (argArray: 'error during db connection'))
);
db.once('open', () => {
	console.log('database successfully connected');
});

app.listen(PORT, () => console.log(`server up and  on port ${PORT}`));
