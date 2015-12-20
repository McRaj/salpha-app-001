'use strict';

/**
 * @ngdoc object
 * @name about.Controllers.AboutController
 * @description AboutController
 * @requires ng.$scope
*/
angular
    .module('about')
    .controller('AboutController', [
        '$scope',
        function($scope) {
          $scope.name = 'Bob';
        }
]);
