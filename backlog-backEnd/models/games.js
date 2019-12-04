const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
	title: {type: String, required: true},
	image: String, 
	studio: String, 
	year: String, 
	platform: String, 
	playing: Boolean, 
	recommended: Boolean
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;

// Games: 
// -Title
// -Cover Art
// -Studio
// -Year
// -Platform
// -playing: boolean
// -final impression
// -recommended: boolean