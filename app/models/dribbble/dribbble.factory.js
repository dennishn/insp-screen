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
    return $resource('http://api.dribbble.com/shots/everyone?per_page=21&callback',
      { callback: 'JSON_CALLBACK' },
      {
        fetch: {
          method: 'JSONP'
        }
      }
    );
  };

})();
