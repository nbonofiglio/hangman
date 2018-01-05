var express = require('express');
var router = express.Router();

//POST inputted word
router.post('/word/input', function(req, res, next) {
	var wordLength = wordArray[wordID].length;
  	res.send({
  		wordLength: wordLength
  	});
});

module.exports = router

//POST letter guess
router.post('/letter/guess', function(req, res, next) {
	
	}
	
	//Returns object with correct letters guessed
	res.send({
		hiddenArray: hiddenArray,
		correct: correct
	});
});
