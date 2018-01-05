app.factory("wordInputService", ["$http", function($http){

	//
	var wordInput = function(){
		var ajaxPromise = $http.post('api/word/input');
	};

	

}])