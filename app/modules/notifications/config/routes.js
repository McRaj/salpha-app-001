'use strict';

/**
* @ngdoc object
* @name notifications.config
* @requires ng.$stateProvider
* @description Defines the routes and other config within the notifications module
*/
angular
    .module('notifications')
    .config(['$stateProvider',
        function($stateProvider) {
            /**
             * @ngdoc event
             * @name notifications.config.route
             * @eventOf notifications.config
             * @description
             *
             * Define routes and the associated paths
             *
             * - When the state is `'notifications'`, route to notifications
             *
            */
            $stateProvider
                .state('notifications', {
                    url: '/notifications',
                    templateUrl: 'modules/notifications/views/notifications.html',
                    controller: 'NotificationsController'
                });
        }
    ]);
