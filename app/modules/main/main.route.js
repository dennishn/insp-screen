'use strict';

/**
 * @ngdoc function
 * @name gnTest4App.route:MainRoute
 * @description
 * # MainRoute
 * Main module route of the inspScreenApp
 */
angular.module('inspScreenApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'modules/main/main.template.html',
        controller: 'Main',
        controllerAs: 'vm'
      })
  });
