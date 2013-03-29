'use strict';

/* Controllers */

function PhoneListCtrl($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
}

//PhoneListCtrl.$inject = ['$scope', '$http'];


function PhoneDetailCtrl($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone){
       $scope.mainImageUrl = phone.images[0];
    });
    $scope.setImage = function(imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', '$http'];
