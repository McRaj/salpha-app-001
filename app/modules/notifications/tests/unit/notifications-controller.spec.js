'use strict';

describe('Controller: NotificationsController', function() {

    //Load the ui.router module
    beforeEach(module('ui.router'));
    //Load the module
    beforeEach(module('notifications'));

    var NotificationsController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        NotificationsController = $controller('NotificationsController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
