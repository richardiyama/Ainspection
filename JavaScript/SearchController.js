
(function(){
	'use strict';
	var app = angular.module('RichardPhotoFlickr');
app.controller('SearchController', ['$scope','$animate','Flickr', function(scope,animate,Flickr){
		
		/*begin head animation*/
		
	                var header = angular.element(document.querySelector('header')),
			container = angular.element(document.querySelector('#container'));
		animate.removeClass(header, 'showHead');
		animate.addClass(header, 'reduceHead');
		animate.addClass(container, 'showRecords');
		/*end animation*/
		
		scope.flickr = new Flickr();
	}]);
}());
