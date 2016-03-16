'use strict';

var app = angular.module('zazzCardApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {url:'/', templateUrl :'/html/home.html'})
		.state('list', {url:'/list', templateUrl :'/html/cardlist.html'})
    $urlRouterProvider.otherwise('/');
});