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

    var poll;

    $q.all([Kimono.get(), Dribbble.get()]).then(function(results) {

      var kimonos = results[0].results.collection1;
      var dribbbles = results[1].shots;

      vm.feeds = createFeeds(dribbbles, kimonos);

      var poll = $interval(pollForFeeds, 300000);
    });

    var pollForFeeds = function() {

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
            feed.resource = "Kimono",
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

    var shuffleArray = function(array) {
      var m = array.length, t, i;

      while (m) {

        i = Math.floor(Math.random() * m--);

        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }

      return array;
    }
  }
})();
