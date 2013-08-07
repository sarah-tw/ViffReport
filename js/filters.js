angular.module('viffReport')
  .filter('imagePath', function () {
    return function(input){
		return encodeURIComponent(input);
	}
  }).filter('browserFilter', function (){
	return function(input){
		return "(" + input[0].toUpperCase() + ")" + input.slice(1);
	}
});