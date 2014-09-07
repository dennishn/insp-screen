(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name inspScreenApp
   * @description
   * # inspScreenApp
   *
   * Main module of the application.
   */
  angular
    .module('inspScreenApp', [

    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngRoute',
    'ui.router',
    'mm.foundation',
    'inspScreenApp.feeds',
    'inspScreenApp.main'

    ]);
})();
