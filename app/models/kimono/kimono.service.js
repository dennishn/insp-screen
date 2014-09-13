(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name inspScreenApp.Kimono
   * @description
   * # Kimono API Service
   * Service in the inspScreenApp.
   */
  angular.module('inspScreenApp.kimono')
    .service('Kimono', Kimono);

  // Kimono.$inject = ['KimonoFactory'];

  function Kimono(KimonoFactory, $q) {
    this.get = function() {

      var deffered = $q.defer();

      KimonoFactory.fetch().$promise.then(function(data) {
        deffered.resolve(data);
      });

      return deffered.promise;
    };
  };

})();
