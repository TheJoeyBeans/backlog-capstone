const env = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// const session = require('express-session');

require('dotenv').config();
require('./db/db');

// app.use(session({

// }))

app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(cors());

const registrationController = require('./controllers/register.js');
app.use('/register', registrationController);

app.listen(process.env.PORT, () => {
	console.log('listening');
});