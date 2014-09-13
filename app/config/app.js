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
    'wu.masonry',
    'uuid',
    'inspScreenApp.kimono',
    'inspScreenApp.dribbble',
    'inspScreenApp.main'

    ]);

  angular
    .module('inspScreenApp')
      .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
      }])
})();
