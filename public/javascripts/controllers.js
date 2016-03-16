'use strict';

var app = angular.module('zazzCardApp');

app.controller('listCtrl', function ($scope, CardFactory) {

	CardFactory.fetch().then(function (res) {
		$scope.cards = res.data;
		// debugger;
	}, function(err) {
		console.log('err: ',err);
	});

  






});

