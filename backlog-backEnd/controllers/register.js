const express = require('express');
const router = express.Router();
const cors = require('cors');
const User = require('../models/users.js');
const bcrypt = require('bcryptjs');

const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true,
	optionsSuccessStatus: 200
}

router.post('/', cors(corsOptions), async (req, res) =>{
	console.log(req.body)
	try{
		const newUser = {};
		newUser.displayName = req.body.displayName
		newUser.email = req.body.email
		newUser.password = req.body.password
		res.statusCode = 200;
		res.send('Ok');
	} catch(err){
		res.send(err);
	}
});

module.exports = router;