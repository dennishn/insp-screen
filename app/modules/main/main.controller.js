(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name gnTest4App.controller:Main
   * @description
   * # Main
   * Controller of the inspScreenApp
   */
  angular.module('inspScreenApp.main')
    .controller('Main', Main);

  // Main.$inject = ['inspScreenApp.feeds'];

  function Main(Kimono, Dribbble, $q, $interval, uuid) {
    var vm = this;

    var feedsToShow = 50;
    var poll;

    $q.all([Kimono.get(), Dribbble.get()]).then(function(results) {

      var kimonos = results[0].results.collection1;
      var dribbbles = results[1].shots;

      vm.feeds = createFeeds(dribbbles, kimonos);

      // Udkommenteret indtil løsning for at tilføje kun nye feeds er fundet
      var poll = $interval(pollForFeeds, 10000);
    });

    function pollForFeeds() {
      // Ide:
      // Poll API'er, kontroller om emne findes i array, er emne nyt,
      // fjern sidste feed i feeds. Er emne ikke nyt gøres intet.

      // Ønsket resultat:
      // pollForFeeds skal tilføje feed til feeds, og sørge for feeds ikke overskrider feedsToShow
      $q.all([Kimono.get(), Dribbble.get()]).then(function(results) {

        var kimonos = results[0].results.collection1;
        var dribbbles = results[1].shots;

        vm.feeds = createFeeds(dribbbles, kimonos);

      });
    }

    function createFeeds(dribbbles, kimonos) {
      var feeds = [];

      var baseFeed = {
        id: "",
        src: "",
        resource: "",
        created: ""
      };
      if(kimonos && kimonos.length > 0) {
        angular.forEach(kimonos, function(kimono, index) {
          var feed = {};
          angular.extend(feed, baseFeed);

          feed.id       = uuid.newuuid();
          feed.src      = kimono.item;
          feed.resource = kimono.api;
          feed.created  = new Date();
          feeds.push(feed);
        });
      }
      if(dribbbles && dribbbles.length > 0) {
        angular.forEach(dribbbles, function(dribbble, index) {
          var feed = {};
          angular.extend(feed, baseFeed);

          feed.id       = uuid.newuuid();
          feed.src      = dribbble.image_url;
          feed.resource = "Dribbble";
          feed.created  = new Date();
          feeds.push(feed);
        });
      }

      return feeds;
    }
  }
})();
