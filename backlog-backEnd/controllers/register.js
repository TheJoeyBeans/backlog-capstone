const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcryptjs');

router.post('/', async (req, res) =>{
	console.log(req)
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