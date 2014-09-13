(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name inspScreenApp.Dribbble
   * @description
   * # Dribbble API Service
   * Service in the inspScreenApp.
   */
  angular.module('inspScreenApp.kimono')
    .service('Dribbble', Dribbble);

  // Dribbble.$inject = ['DribbbleFactory'];

  function Dribbble(DribbbleFactory, $q) {
    this.get = function() {

      var deffered = $q.defer();

      DribbbleFactory.fetch().$promise.then(function(data) {
        deffered.resolve(data);
      });

      return deffered.promise;
    };
  };

})();
