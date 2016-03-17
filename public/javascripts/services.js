'use strict';

var app = angular.module('zazzCardApp');

// app.factory('CategoryFactory',function ($http) {
// 	return {
// 		fetch: 	function() {
// 			return $http.get('/categories');
// 		},
// 		create:	function(newCategory) {
// 			return $http.post('/categories',newCategory);
// 		},
// 		remove:	function(oldCategory) {
// 			var url = `/categories/${oldCategory.id}`;
// 			return $http.delete(url);		//	promise
// 		},
// 		update:	function(categoryEd) {
// 			return $http.put(`/categories/${categoryEd.id}`,categoryEd);
// 		}
// 	}
// });

app.factory('CardFactory', function ($http) {
	return {
		fetch: 	function() {
			return $http.get('/cards');
		},
		create:	function(newCard) {
			return $http.post('/cards',newCard);
		},
		remove:	function(oldCard) {
			var url = `/cards/${oldCard.CardID}`;
			return $http.delete(url);		//	promise
		},
		update:	function(cardEd) {
			return $http.put(`/cards/${cardEd.CardID}`,cardEd);
		}
	}
});