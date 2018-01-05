app.factory("letterGuessService", ["$http", function($http){

	//returns array with correct guesses
	var letterGuessed = function(guessedLetter, wordId){
		var ajaxPromise =$http.post('/api/letter/guess', {
			guessedLetter: guessedLetter
		});
		return ajaxPromise;
	};

	return {
		letterGuessed: letterGuessed
	};

}]);