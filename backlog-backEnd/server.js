// const env = require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// const session = require('express-session');

// require('dotenv').config();
require('./db/db');

// app.use(session({

// }))

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.listen(8000, () => {
	console.log('listening');
});