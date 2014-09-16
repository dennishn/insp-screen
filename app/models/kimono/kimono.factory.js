(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name inspScreenApp.Kimono
   * @description
   * # Kimono API binding
   * Factory in the inspScreenApp.
   */
  angular.module('inspScreenApp.kimono')
    .factory('KimonoFactory', KimonoFactory);

  // KimonoFactory.$inject = ['$resource'];

  function KimonoFactory($resource) {
    return $resource('https://www.kimonolabs.com/api/dcggulzm?apikey=9FQDl0RCK8KGiKAGBsqR77l56PeahdV6&kimlimit=21&callback=JSON_CALLBACK',
      { callback: 'JSON_CALLBACK' },
      {
        fetch: {
          method: 'JSONP'
        }
      }
    );
  };

})();
