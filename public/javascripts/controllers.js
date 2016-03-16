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

app.controller('cardCtrl', function ($scope, CardFactory, CategoryFactory) {

	if (!$scope.newCard) $scope.newCard = {}


	$scope.addCard = function() {
		CardFactory.create($scope.newCard).then(function(res) {
			// console.log('res: ', res);
			$('#new-card-modal').modal('hide');
			$scope.cards.push(res.data);
			$scope.newCard = undefined;
		}, function(err) {
			console.error('err: ', err);
		});
	}

	$scope.removeCard = function(card) {
		CardFactory.remove(card)
		.then(function(card) {
			//success!
			CardFactory.fetch().then(function(res) {
				// console.log('res: ', res);
				$scope.cards = res.data;
			}, function(err) {
				console.error('err: ', err);
			});

		}, function(err) {
			console.error(err)
		});
	}

	$scope.editCard = function(card) {
		$scope.cardEd = angular.copy(card);
	}

	$scope.cancelEditing = function() {
		$scope.cardEd=undefined;
		$scope.newCard=undefined;
	}

	$scope.commitEdit = function() {
		CardFactory.update($scope.cardEd).then(function() {
			$scope.cards.splice($scope.cards.findIndex(e => e.id === $scope.cardEd.id), 1, angular.copy($scope.cardEd));
			$scope.cardEd = undefined;

		});
	}

})


