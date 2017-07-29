(function(){
	'use strict';
	var app = angular.module('RichardPhotoFlickr');
	
	/*start search through flickr API*/
	app.factory('Flickr', ['$http','$stateParams',function(http,stateParams) {
		var Flickr = function() {
			this.items = [];	// this is the storing data
			this.busy = false;	// this let us know if is it still searching
			this.page = 1;
		};
		
		Flickr.prototype.nextPage = function() {
			if(stateParams.q){
				var it = this,
					method = 'flickr.photos.search',
					apiKey = '83acbf3e0bbb3d33f79f5fde6aebcc3f',
					type = stateParams.by == 'all' ? '&text='+stateParams.q : '&tags='+stateParams.q+'&tag_mode=all';
				if (it.busy) return;
				it.busy = true;
				http({
					/*start connecting to flickr api*/
					cache: true,
					method: 'GET',
					url: 'https://api.flickr.com/services/rest/?method='+method+'&api_key='+apiKey+'&format=json&nojsoncallback=1'+type+'&page='+it.page
					/*end connecting to flickr api*/
				}).success(function(response){
					if(it.page <= response.photos.pages){	// if not yet rich the limit of record then continue
						var result = response.photos.photo; 
						for (var i = 0; i <= result.length-1; i++) {
							it.items.push(result[i]);	// add all data in the storing data one by one
						}
						it.page++;
					}
					it.busy = false;
				}).error(function(error){
					console.log(error);
					it.busy = false;
				}.bind(it));
			}
		};
		return Flickr;
	}]);
	/*end search through flickr API*/
	
	}());
