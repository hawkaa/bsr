'use strict';

/**
 * @ngdoc function
 * @name bsrApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bsrApp
 */
angular.module('bsrApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
