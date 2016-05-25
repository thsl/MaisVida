'use strict';

/* App Module */

var mvApp = angular.module('mvApp', [ 'ngRoute', 'mvControllers', 'mvFilters', 'mvServices' ]);

mvApp.config([ '$routeProvider', function($routeProvider) {
  $routeProvider.when('/cadastro', {
      templateUrl : 'app/html/cadastro/cadastro.html',
      controller : 'CtrlCadastro',
      controllerAs : 'ctCad'
  }).when('/login', {
      templateUrl : 'app/html/autenticacao/login.html',
      controller : 'CtrlAutenticacao',
      controllerAs : 'ctAut'
  }).otherwise({
    redirectTo : '/cadastro'
  });
} ]);

/* Controllers - for further specification */
var mvControllers = angular.module('mvControllers', []);

/* Filters - for further specification */
var mvFilters = angular.module('mvFilters', []);

/* Services - for further specification */
var mvServices = angular.module('mvServices', [ 'ngResource' ]);
