'use strict';

/* Autenticacao */

mvControllers.controller('CtrlLogin', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);
