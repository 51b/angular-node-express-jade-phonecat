'use strict';

/* App Module */

angular.module('phonecat', ['phonecatFilters','phonecatServices'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/phones', { templateUrl: '/phoneList',   controller: PhoneListCtrl}).
            when('/phones/:phoneId', {templateUrl: '/phoneDetail', controller: PhoneDetailCtrl}).
            otherwise({redirectTo: '/phones'});
    }]);
