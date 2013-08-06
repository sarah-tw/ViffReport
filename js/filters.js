angular.module('viffReport')
  .filter('imagePath', function () {
    return function(input){
		return encodeURIComponent(input);
	}
  });