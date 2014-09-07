(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name inspScreenApp.Feeds
   * @description
   * # Feeds
   * Factory in the inspScreenApp.
   */
  angular.module('inspScreenApp.feeds')
    .factory('FeedsFactory', FeedsFactory);

  // FeedsFactory.$inject = ['$resource'];

  function FeedsFactory($resource) {
    return $resource('http://ajax.googleapis.com/ajax/services/feed/load', {}, {
        fetch: { method: 'JSONP', params: {v: '1.0', callback: 'JSON_CALLBACK'} }
    });
  };

})();
