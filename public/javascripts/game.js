'use strict';

var app = angular.module('zazzCardApp');

app.controller('gameCtrl', function ($scope, CardFactory) {
	 var slides;
	CardFactory.fetch().then(function (res) {
		$scope.cards = res.data;


	$scope.myInterval = 5000;
  $scope.noWrapSlides = true;
  $scope.active = 0;
  slides = $scope.slides = angular.copy($scope.cards);
  console.log('scope slides',$scope.slides)
  // $rootScope.slides = slides;
  // console.log("slides: ", slides)
  // console.log("scope: ", $scope)
  // console.log("scope parent: ", $scope.$parent)
  // debugger;
  var currIndex = 0;
		// debugger;
	}, function(err) {
		console.log('err: ', err);
	});



	$scope.debug = function(){
		// debugger;
	}


  $scope.addSlide = function() {
    console.log("add slides")
    debugger;
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'http://lorempixel.com/' + newWidth + '/300',
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  // for (var i = 0; i < 4; i++) {
  //   $scope.addSlide();
  // }

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }

});


// angular.module('zazzCardApp').controller('CarouselDemoCtrl', function ($scope) {
  
// });