'use strict';

/* App Module */

var maisVida = angular.module('MaisVida', [ 'ngRoute', 'CtrlAutenticacao', 'CtrlCadastro', 'FltCadastro' ]);

maisVida.config([ '$routeProvider', function($routeProvider) {
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

/* Services - for further specification */
var mvServices = angular.module('mvServices', [ 'ngResource' ]);
