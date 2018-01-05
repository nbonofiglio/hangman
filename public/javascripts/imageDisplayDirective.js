app.directive('imageDisplayDirective', [function() {
	return {
		restrict: 'E',
		scope: {
			incorrectCount: '@'
		},
		
		//dynamic image display of the Hangman
		link: function(scope, element, attrs, controllers){
    		var hangmanImages = {
	    		0: 'images/hangman0.jpg',
	    		1: 'images/hangman1/jpg',
	    		2: 'images/hangman2.jpg',
	    		3: 'images/hangman3.jpg',
	    		4: 'images/hangman4.jpg',
	    		5: 'images/hangman5.jpg',
	    		6: 'images/hangman6.jpg',
	    		7: 'images/hangman7.jpg',
	    		8: 'images/hangman8.jpg',
	    		9: 'images/hangman9.jpg',
	    		10: 'images/hangman10.jpg',
	    	};

	    	
	    	scope.hangmanSrc = hangmanImages[scope.incorrectCount]

	    	//
	    	scope.$watch(
	    		function (scope) {
	    			return scope.incorrectCount
	    		}, 
	    		function(value) {
					scope.hangmanSrc = hangmanImages[scope.incorrectCount]			
		    	}
		    );
      	},
		template: '<img ng-show="hangmanSrc" src="{{hangmanSrc}}" />'
	};
}]);