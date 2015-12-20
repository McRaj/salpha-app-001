'use strict';

/**
* @ngdoc object
* @name about.config
* @requires ng.$stateProvider
* @description Defines the routes and other config within the about module
*/
angular
    .module('about')
    .config(['$stateProvider',
        function($stateProvider) {
            /**
             * @ngdoc event
             * @name about.config.route
             * @eventOf about.config
             * @description
             *
             * Define routes and the associated paths
             *
             * - When the state is `'about'`, route to about
             *
            */
            $stateProvider
                .state('about', {
                    url: '/about',
                    templateUrl: 'modules/about/views/about.html',
                    controller: 'AboutController'
                });
        }
    ]);
