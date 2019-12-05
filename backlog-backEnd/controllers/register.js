const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcryptjs');

router.post('/', async (req, res) =>{
	console.log(req.body)
	try{
		const password = req.body.password;
		const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
		const newUser = {};
		newUser.displayName = req.body.displayName;
		newUser.email = req.body.email;
		newUser.password = passwordHash;

		const createdUser = await User.create(newUser);
		console.log('Created user', createdUser)
		req.session.username = createdUser.username;
		req.session.logged = true;

		res.send({message: "User Registered", status: 201})
	} catch(err){
		res.send(err);
	}
});

module.exports = router;