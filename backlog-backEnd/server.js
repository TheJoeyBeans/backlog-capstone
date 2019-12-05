const env = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');

require('dotenv').config();
require('./db/db');

app.use(session({
	secret: "this is a secret",
	resave: false,
	saveUninitialized: false
}))

app.use(bodyParser.json({ extended: true }));
app.use(methodOverride('_method'));

var whitelist = ['http://localhost:3000']
var corsOptions = {
	credentials: true,
	origin: function (origin, callback) {
		if (whitelist.indexOf(origin) !== -1){
			callback(null, true)
		} else {
			callback(new Error('Not allowed by CORS'))
		}
	}
}

app.use(cors(corsOptions));

const registrationController = require('./controllers/register.js');
app.use('/register', registrationController);

app.listen(process.env.PORT, () => {
	console.log('listening');
});