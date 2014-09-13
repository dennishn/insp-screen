(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name inspScreenApp.Dribbble
   * @description
   * # Dribbble API binding
   * Factory in the inspScreenApp.
   */
  angular.module('inspScreenApp.dribbble')
    .factory('DribbbleFactory', DribbbleFactory);

  // DribbbleFactory.$inject = ['$resource'];

  function DribbbleFactory($resource) {
    return $resource('http://api.dribbble.com/shots/everyone?callback',
      { callback: 'JSON_CALLBACK' },
      {
        fetch: {
          method: 'JSONP'
        }
      }
    );
  };

})();
