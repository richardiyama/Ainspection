(function(){
	'use strict';
	
	var app = angular.module('RichardPhotoFlickr', ['ui.router','ngAnimate','infinite-scroll']);
	
	/*start router*/
	app.config(['$stateProvider','$locationProvider','$urlRouterProvider',
		function(stateProvider,locationProvider,urlRouterProvider) {
			stateProvider.state('home', {
				url: '/',
				templateUrl: '#',
				controller: 'HomeController'
			}).state('search', {
				url: '/search/:by/:q',
				templateUrl: 'view/PhotoList.html',
				controller: 'SearchController'
			});
			urlRouterProvider.otherwise('/');
		}
	]);
	/*end router*/
	
	/*start photocontroller controller*/
	app.controller('PhotoController', ['$scope','$state','$compile','$http', function(scope,state,compile,http){
		scope.search = function(){
			if(scope.search.term){
				state.go('search',{by:scope.search.by, q: scope.search.term});	//this will go to search and add a paramter
			}
			scope.removePredictedText();
		}
		
		/*start predection text layout*/
		scope.showPredictedText = function(){
			var	search = $('.search'),
				body = $('body'),
				searchBar = search.offset(),
				searchBarHeight = search.height(),
				searchBarWidth = search.width(),
				predictedText = '<div id="predictedText"></div>',
				list = '',
				method = 'flickr.photos.search',
				apiKey = '83acbf3e0bbb3d33f79f5fde6aebcc3f',
				type = scope.search.by == 'all' ? '&text='+scope.search.term : '&tags='+scope.search.term+'&tag_mode=all';
		
			if($('div#predictedText').length == 0){ // if not exist then insert the pridected text
				$('body').append(compile(predictedText)(scope));
			}
			
			if(scope.search.term){
				http({
					cache: true,
					method: 'GET',
					url: 'https://api.flickr.com/services/rest/?method='+method+'&api_key='+apiKey+'&format=json&nojsoncallback=1'+type+'&page=1&sort=interestingness-asc'
				}).success(function(response){
					var result = response.photos.photo,
						limit = response.photos.total <= 3 ? response.photos.total : 3 ;
					for (var i = 0; i <= limit; i++) {
						list += '<p><label ng-click="clickPredictedText($event)">';
						list += result[i].title;
						list += '</label>';
						list += '<img src="https://farm'+result[i].farm+'.staticflickr.com/'+result[i].server+'/'+result[i].id+'_'+result[i].secret+'_s.jpg">';
						list += '</p>';
					}
					$('div#predictedText').html(compile(list)(scope));
				});
			} else{
				scope.removePredictedText();
			}
			
			$('#predictedText').css({
				top: parseInt(searchBar.top + searchBarHeight + 10),
				left: searchBar.left,
				width: searchBarWidth
			});
		}
		
		scope.clickPredictedText = function(e){
			var text = e.target.innerHTML;
			$('.search').val(text);
			scope.search.term = text;
		}
		
		scope.removePredictedText = function(){
			$('#predictedText').remove();
		}
		
		$(window).resize(function(){
			scope.showPredictedText();
		});
		/*end predection text layout*/
		
	}]);
	/*end main controller*/
}());
